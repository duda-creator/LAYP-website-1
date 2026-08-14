# Plan: Scaffold the Lead At Your Peak Website

## Context

The repo is greenfield: one commit containing `CLAUDE.md` (a complete site spec), brand assets in `design-reference/` (logos, `LAYP symbol.svg`, P.E.A.K.S. graphics, hero photo), and founder/session photos in `photos/Other/`. No code exists yet. The goal is a 4-page, conversion-focused static marketing site (Home, Services, About, Contact) built with Astro + Tailwind, deployed to Hostinger.

Decisions confirmed with the user:
- **Hosting:** Hostinger **Business Web Hosting** → deploy via hPanel's built-in **Deploy Web App** GitHub flow (no custom FTP Action needed).
- **Forms:** **Web3Forms** for both the contact form and newsletter signup (newsletter arrives as form submissions for now; a provider embed can replace it later).

## Phase 1 — Tech setup

1. Scaffold Astro (latest, static output — the default) into the project root with the minimal template; merge with existing files rather than a subfolder.
2. Add **Tailwind CSS v4** via `@tailwindcss/vite` (Astro's current recommended integration) with a single `src/styles/global.css`.
3. Add `@astrojs/sitemap`, and self-hosted fonts via `@fontsource-variable/montserrat` (headings) + `@fontsource-variable/inter` (body) — no external font requests.
4. Move web-bound images into `src/assets/images/` so Astro's built-in `<Image>`/Sharp pipeline generates optimized responsive WebP (source photos are 5–19 MB JPGs and must never ship as-is). `design-reference/` and `photos/` stay as source archives, git-ignored if desired.
5. Directory layout:
   ```
   src/
     styles/global.css        # Tailwind + theme tokens
     layouts/BaseLayout.astro # head, SEO meta, fonts, header/footer slots
     components/              # design system + section components
     pages/                   # index, services, about, contact
     assets/images/
   public/                    # favicon (from LAYP symbol.svg), robots.txt
   ```
6. Extend `.gitignore` for `node_modules/`, `dist/`, `.astro/`. (Note: project lives in OneDrive — recommend marking `node_modules` as "always keep on this device"/excluded from sync to avoid file-lock slowness.)

## Phase 2 — Design system (before any pages)

Define tokens in `global.css` via Tailwind v4 `@theme`:
- Colors: primary `#1a4578`, accent `#ff6b35`, gold `#d4af37`, cream `#f6f5f2`, beige `#e3e1dc`
- Fonts: Montserrat (headings, bold), Inter (body, ≥16px); strong H1/H2/H3 hierarchy
- Container max-width 1200px; section padding 80px desktop / 40px mobile; 0.3s ease transitions

Core components (each previewed in the browser as built — will use the `frontend-design` skill for aesthetic direction):
- `Button.astro` — primary (accent bg, white text, shadow, ≥48px) and secondary (outline) variants with hover elevation/brightness
- `Section.astro` / `Container.astro` — spacing + max-width wrappers
- `Card.astro` — service/testimonial base with subtle hover elevation
- `Icon.astro` — inline minimal line-icon set (4 services + social: LinkedIn, YouTube, Instagram)
- `PeakAccent.astro` — abstract peak/ascending-line SVG motifs derived from `LAYP symbol.svg` (subtle, not literal mountains)
- `FadeIn.astro` — IntersectionObserver fade-in-on-scroll wrapper, respecting `prefers-reduced-motion`
- `Header.astro` — sticky, logo left, Services dropdown, About, Contact, "Book A Call" CTA, mobile hamburger
- `Footer.astro` — logo, nav, CTAs, social icons, copyright
- `ContactForm.astro` / `NewsletterForm.astro` — Web3Forms POST (access key as `TODO:` placeholder), honeypot + reCAPTCHA slot, client-side validation, success/error states

## Phase 3 — Pages (in this order)

1. **Homepage** (`index.astro`) — builds all 8 spec'd sections (hero with Karolina session photo, problem/solution, 2×2 services grid, testimonials with `TODO:` placeholder quotes, about teaser, newsletter gradient section, footer, sticky nav). Establishes every pattern the other pages reuse.
2. **Services** (`services.astro`) — "Elevate Your Leadership" hero; four alternating image/text service sections (who it's for, what's included, outcomes, CTA); zcal embed placeholder.
3. **About** (`about.astro`) — "Guiding Leaders To Leading At Their Peak"; founder story with photo, mission/values, credentials as `TODO:` (never invented), "Work With Us" CTA.
4. **Contact** (`contact.astro`) — "Let's Start Your Ascent"; Web3Forms contact form (Name, Email, Company, Role, Message), phone placeholder, zcal booking embed placeholder.

Content rules per CLAUDE.md: use the provided placeholder headlines/copy; `TODO:` comments for anything missing (testimonials, credentials, zcal link, social URLs, Web3Forms key) — never invent.

## Phase 4 — QA & polish

- Responsive pass at 320/768/1024+ breakpoints; touch targets ≥48px
- Accessibility: semantic HTML5, heading hierarchy, contrast (check accent orange on light backgrounds), focus states, alt text
- `npm run build` clean; spot-check `dist/` output size (images must be optimized, not multi-MB)
- Per-page SEO: unique titles/descriptions, OG tags, sitemap

## Phase 5 — Deployment (Business plan)

- Create a GitHub repo and push (small, descriptive commits per phase).
- In hPanel → Websites → Deploy Web App: connect the repo, build command `npm run build`, output dir `dist/`. Fall back to a GitHub Action + FTP only if that flow doesn't fit.
- Add analytics script tag (Plausible or GA4 — `TODO:` until the user picks/provides an ID).

## Verification

- `npm run dev` and preview every page in the browser at each phase before moving on (per CLAUDE.md working convention).
- `npm run build` succeeds; inspect `dist/` for optimized images and working links.
- Submit the contact form against a Web3Forms test key once the user supplies one.

## Inputs still needed from the user (as TODOs, non-blocking)

Web3Forms access key · zcal booking link · real testimonials/credentials · social profile URLs · phone number · analytics choice/ID.
