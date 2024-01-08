import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://uraohjain.hel.fi",
  output: "server",
  integrations: [react(), tailwind()],
  i18n: {
    defaultLocale: 'fi',
    locales: ['fi', 'en'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});
