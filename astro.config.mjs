import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://shadow-logan.github.io",
  base: "/",
  output: "server",
  adapter: netlify()
});