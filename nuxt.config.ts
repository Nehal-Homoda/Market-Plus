// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: "Prices Plus",
      htmlAttrs: { lang: "ar", dir: 'rtl', translate: 'no' },
      meta: [{ name: "description", content: "Prices Plus" }],
      link: [
        { rel: "icon", type: "image/png", href: "./logo.png" },
      ],
      script: [],
    },
  },
  css: ["~/assets/sass/main.scss"],
  modules: ['vuetify-nuxt-module', '@pinia/nuxt'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: './vuetify.config.ts' // <== you can omit it
  },
  runtimeConfig: {
    public: {
      apiBaseURL: "",
      googleMapsApiKey: "",
    },
  },
  vite: {
    vue: {
      // template: {
      //   transformAssetUrls,
      // },
    },
    define: {
      "process.env.DEBUG": false,
    },
    build: {
      // transpile: [],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                @use "@/assets/sass/abstracts" as *;
          `,
        },
      },
    },
  },
  devServer: {
    // host: "host",
    port: 3001,
  },
})