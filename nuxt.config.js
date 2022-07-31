export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'HBM | Système complet de gestion des réservations de votre flotte d\'autocars et bus',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon',type:'image/x-icon', href: '/favicon/favicon.ico' },
      { rel: 'apple-touch-icon', sizes:'180x180', href: '/favicon/apple-touch-icon.png' },
      { rel: 'icon', sizes:'32x32', type:'image/png', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', sizes:'16x16', type:'image/png', href: '/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicon/site.webmanifest' },
      { rel: 'mask-icon', color:'#5bbad5', href: '/favicon/safari-pinned-tab.svg' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@6.9.96/css/materialdesignicons.min.css' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      'primeflex/primeflex.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://www.primefaces.org/primevue/showcase-v2/#/setup
    'primevue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // https://github.com/primefaces/primevue/issues/844
    transpile: ['primevue'],
  }
}
