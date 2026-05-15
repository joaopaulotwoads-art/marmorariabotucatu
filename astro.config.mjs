import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://marmorariabotucatu.com.br",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
