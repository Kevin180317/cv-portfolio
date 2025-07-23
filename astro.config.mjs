// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://okhuysen.me",
  integrations: [sitemap(), robotsTxt()],

  vite: {
    plugins: [tailwindcss()],
  },
});
