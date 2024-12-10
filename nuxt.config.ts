// https://nuxt.com/docs/api/configuration/nuxt-config
import { processSFCs } from "./processSFC.js"; // Import your preprocessor

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],
  ssr: true,
  app: {
    baseURL: "/RidiculousButtons/", // Replace 'repository-name' with your GitHub repo name
  },
  vite: {
    plugins: [
      {
        name: "preprocess sfc content",
        enforce: "pre",
        buildStart() {
          processSFCs();
        },
      },
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/scss/_colors.scss" as *;`,
          api: "modern-compiler",
        },
      },
    },
  },

  modules: ["@nuxtjs/color-mode"],
});
