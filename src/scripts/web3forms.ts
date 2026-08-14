/**
 * Shared AJAX submit handler for every form marked with [data-w3form].
 * Posts to Web3Forms and swaps the status line between sending /
 * success / error without leaving the page.
 */
const forms = document.querySelectorAll<HTMLFormElement>('form[data-w3form]');

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
        showStatus('error', form.dataset.errorMessage ?? 'Something went wrong. Please try again.');
      }
    } catch {
      showStatus('error', form.dataset.errorMessage ?? 'Something went wrong. Please try again.');
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
});
