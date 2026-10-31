// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the production domain once confirmed
  site: 'https://leadatyourpeak.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
