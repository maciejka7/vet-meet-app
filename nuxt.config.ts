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
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    // "@sidebase/nuxt-auth",
  ]
})