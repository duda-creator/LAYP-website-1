# Lead At Your Peak — Website

Marketing and lead-generation site for Lead At Your Peak, built with
[Astro](https://astro.build) (static output) and Tailwind CSS, hosted on
Hostinger (Business Web Hosting).

## Local development

```sh
npm install      # first time only (requires Node >= 22.12)
npm run dev      # dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

## Deployment workflow

Hosting is Hostinger's **Deploy Web App** flow, which builds the site from
GitHub and publishes the `dist/` output into the document root. Do **not**
upload the repository source into `public_html` — the site must be built first,
and Deploy Web App handles that.

### Everyday changes (existing site)

1. Make and preview changes locally (`npm run dev`).
2. Verify the production build passes: `npm run build`.
3. Commit and push to the `main` branch on GitHub.
4. Hostinger picks up the push and rebuilds automatically. If it doesn't, open
   **hPanel → Websites → [site] → dashboard** and trigger a **Redeploy** from the
   deployments section.
5. Check the live site to confirm the change is up.

### Setting up a new site (first deployment)

1. In hPanel go to **Websites → Add Website → Deploy Web App**.
2. Connect the GitHub account and select this repository, branch `main`.
3. On **Review build settings**, keep the Astro defaults:
   - Node version: **22.x**
   - Root directory: `./`
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy, then click through the pages (Home, Services, About, Contact) on the
   live domain to confirm everything loads.

> Note: hPanel's older **Advanced → Git** feature only clones the repository
> without building it, which serves raw source files instead of the site. Use
> Deploy Web App, not Advanced → Git.
