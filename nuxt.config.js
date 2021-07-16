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
    { src: '@plugins/highlight.js' },
  ],
  build: {
    babel: {
      compact: false,
    },
  },
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],
  styleResources: {
    scss: ['./assets/scss/resources.scss'],
  },
  modules: [
    '@nuxtjs/style-resources',
    'bootstrap-vue/nuxt',
    '@nuxtjs/firebase',
  ],
  firebase: {
    config: {
      apiKey: 'AIzaSyDfKBqPimZdhWaQLfv94v18asotNZw6HD8',
      authDomain: 'crypton-frontend-flow.firebaseapp.com',
      projectId: 'crypton-frontend-flow',
      storageBucket: 'crypton-frontend-flow.appspot.com',
      messagingSenderId: '490753099829',
      appId: '1:490753099829:web:71752391e277f7ef78c97c',
    },
    services: {
      firestore: true,
      functions: true,
      database: true,
    },
  },
};
