export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'CarrefourSA',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/main.css',
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/products.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',

    'vue-screen/nuxt',

    //firebase
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyDg7xR_aBM5_3CO_7K51dcqPOlViv-nCxg",
          authDomain: "carrefoursa-web-app.firebaseapp.com",
          databaseURL: "https://carrefoursa-web-app-default-rtdb.firebaseio.com",
          projectId: "carrefoursa-web-app",
          storageBucket: "carrefoursa-web-app.appspot.com",
          messagingSenderId: "544156383185",
          appId: "1:544156383185:web:ceb98440d799fbcb9a52f0"

        },
        services: {
          auth: true,
          firestore: true,
          storage: true,
          database: true,
          messaging: true,
          performance: true,
          analytics: true,
          remoteConfig: true
        }
      }
    ]

  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  bootstrapVue: {
    icons: true,
    // Add the icon plugin to the `componentsPlugins` array
  },
  screen: {
    extend: 'bootstrap',
  },
}
