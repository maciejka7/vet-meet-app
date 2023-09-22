// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: [
    "@pinia/nuxt",
    "@nuxt/devtools",
    // "@sidebase/nuxt-auth",
    "@nuxtjs/tailwindcss",

  ]
})