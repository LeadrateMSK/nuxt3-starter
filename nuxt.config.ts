// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // Заменяется значениями из .env
  runtimeConfig: {
    apiSecret: '1234567890',
    public: {
      apiBase: '',
    }
  },

  // Tailwind & Nuxt 2/3: https://tailwindcss.com/docs/guides/nuxtjs
  tailwindcss: {
    configPath: '~/tailwind.config.cjs',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true
  },

  css: [
    '~/assets/css/styles.css'
  ],

  app: {
    head: {
      title: 'Nuxt 3 starter (LR)',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
      ],
    },
  },

  modules: [
    // Pinia: https://pinia.vuejs.org/ssr/nuxt.html
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],

    // Tailwind & Nuxt 2/3: https://tailwindcss.com/docs/guides/nuxtjs
    '@nuxtjs/tailwindcss',
  ],
});
