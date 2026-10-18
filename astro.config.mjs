import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://marmorariabotucatu.com.br",
  output: "static",
  integrations: [sitemap()],
  redirects: {
    "/servicos/porcelanato-tecnico": "/servicos/",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
