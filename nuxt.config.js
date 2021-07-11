export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'Crypton Frontend Flow',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Crypton Frontend Flow' },
    ],
    link: [
    ],
  },
  css: [
    '@/assets/scss/main.scss',
  ],
  plugins: [
    { src: '@plugins/main.js' },
    { src: '@plugins/injectComponents.js' },
    { src: '@plugins/highlight.js' },
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],
  styleResources: {
    scss: ['./assets/scss/resourses.scss'],
  },
  modules: [
    '@nuxtjs/style-resources',
    'bootstrap-vue/nuxt',
  ],
};
