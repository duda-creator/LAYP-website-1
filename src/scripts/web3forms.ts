/**
 * Shared AJAX submit handler for every form marked with [data-w3form].
 * Posts to Web3Forms and swaps the status line between sending /
 * success / error without leaving the page.
 */
// Populated once the dynamically-loaded hCaptcha script runs; typed loosely since no first-party types are published.
declare const hcaptcha: {
  render: (container: HTMLElement, params: Record<string, unknown>) => string;
  execute: (widgetId?: string, options?: { async: boolean }) => Promise<{ response: string; key: string }>;
  reset: (widgetId?: string) => void;
} | undefined;

const HCAPTCHA_SITEKEY = '50b2fe65-b00b-4b9e-ad62-3ba471098be2';

let hcaptchaReadyPromise: Promise<void> | null = null;
const hcaptchaWidgetIds = new WeakMap<HTMLElement, string>();

// Loads the hCaptcha SDK and waits for its own onload callback — not the script's
// download-complete event — since hCaptcha isn't ready for render()/execute() until then.
function loadHcaptcha(): Promise<void> {
  if (hcaptchaReadyPromise) return hcaptchaReadyPromise;

  hcaptchaReadyPromise = new Promise((resolve, reject) => {
    const callbackName = '__onHcaptchaReady';
    (window as unknown as Record<string, () => void>)[callbackName] = () => resolve();

    const script = document.createElement('script');
    // recaptchacompat=off: without this, hCaptcha also injects a g-recaptcha-response field,
    // which makes Web3Forms think reCAPTCHA (a Pro feature) is being used and reject the submission.
    script.src = `https://js.hcaptcha.com/1/api.js?render=explicit&onload=${callbackName}&recaptchacompat=off`;
    script.async = true;
    script.defer = true;
    script.addEventListener('error', () => reject(new Error('hCaptcha script failed to load')));
    document.head.appendChild(script);
  });

  return hcaptchaReadyPromise;
}

// Renders (once) the invisible widget for a given container and returns its widget ID.
function getWidgetId(captchaEl: HTMLElement): string {
  let widgetId = hcaptchaWidgetIds.get(captchaEl);
  if (widgetId === undefined) {
    widgetId = hcaptcha!.render(captchaEl, { sitekey: HCAPTCHA_SITEKEY, size: 'invisible' });
    hcaptchaWidgetIds.set(captchaEl, widgetId);
  }
  return widgetId;
}

const forms = document.querySelectorAll<HTMLFormElement>('form[data-w3form]');

// Load hCaptcha and pre-render every widget as soon as possible, well ahead of
// the user clicking submit, since render() needs a moment to mount its iframe.
const captchaEls = document.querySelectorAll<HTMLElement>('.h-captcha');
if (captchaEls.length > 0) {
  loadHcaptcha().then(() => {
    captchaEls.forEach((el) => getWidgetId(el));
  });
}

forms.forEach((form) => {
  const status = form.querySelector<HTMLElement>('[data-form-status]');
  const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');

  const showStatus = (kind: 'sending' | 'success' | 'error', message: string) => {
    if (!status) return;
    status.textContent = message;
    status.classList.remove('hidden', 'text-green-700', 'text-red-700', 'text-ink/60');
    status.classList.add(
      kind === 'success' ? 'text-green-700' : kind === 'error' ? 'text-red-700' : 'text-ink/60'
    );
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Honeypot: silently drop bot submissions that filled the hidden field
    const botcheck = form.querySelector<HTMLInputElement>('input[name="botcheck"]');
    if (botcheck?.checked) return;

    const captchaEl = form.querySelector<HTMLElement>('.h-captcha');
    let widgetId: string | undefined;
    if (captchaEl) {
      try {
        await loadHcaptcha();
        widgetId = getWidgetId(captchaEl);
        await hcaptcha!.execute(widgetId, { async: true });
      } catch {
        showStatus('error', 'Security check failed. Please try again.');
        return;
      }
    }

    if (submitButton) submitButton.disabled = true;
    showStatus('sending', 'Sending…');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json();

      if (result.success) {
        showStatus('success', form.dataset.successMessage ?? 'Thank you — your message is on its way.');
        form.reset();
      } else {
        console.error('Web3Forms submission rejected:', result);
        showStatus('error', form.dataset.errorMessage ?? 'Something went wrong. Please try again.');
      }
    } catch {
      showStatus('error', form.dataset.errorMessage ?? 'Something went wrong. Please try again.');
    } finally {
      if (submitButton) submitButton.disabled = false;
      if (captchaEl && typeof hcaptcha !== 'undefined') hcaptcha.reset(widgetId);
    }
  });
});
