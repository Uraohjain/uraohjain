import { defineConfig, squooshImageService } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://uraohjain.hel.fi",
  output: "server",
  integrations: [react(), tailwind(), sitemap()],
  // i18n: {
  //   defaultLocale: "fi",
  //   locales: ["fi", "en"],
  // routing: {
  //   prefixDefaultLocale: true,
  // },
  // },
  image: {
    service: squooshImageService(),
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
