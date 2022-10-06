// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: '1234567890',
    public: {
      apiBase: '',
    }
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
  ],
});
