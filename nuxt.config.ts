// https://nuxt.com/docs/api/configuration/nuxt-config
import { processSFCs } from "./processSFC.js"; // Import your preprocessor

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss", "~/assets/_fonts.scss"],

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
          additionalData: '@use "~/assets/_colors.scss" as *;',
        },
      },
    },
  },

  modules: ["@nuxtjs/color-mode"],
});
