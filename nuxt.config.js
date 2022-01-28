const strapiBaseUri = process.env.API_URL || "https://franckmalecki.jbloup-server.fr";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  env: {
    strapiBaseUri,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.TITLE || "Franck Malecki - Ambassadeur d'un mode de vie sain et actif",
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Varela+Round'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i'
      }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
        type: "text/javascript"
      },
      {
        src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js',
        type: "text/javascript"
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js',
        type: "text/javascript"
      },
/*      {
        src: '@/assets/js/scripts.js',
        type: "text/javascript"
      }*/
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/styles.css',
  ],
  script: [
    '@/assets/js/scripts.js',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@nuxtjs/google-fonts',
    '@nuxtjs/markdownit'
  ],

  // This is for displaying rich text content in the frontend.
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },

  fontawesome:{
    component: 'fa',
    icons:{
      solid: true,
      brands: true,
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/strapi',
  ],

  strapi: {
    url: strapiBaseUri,
    entities: [
      {
        name: "about",
        type: "single",
      },
      {
        name: "opportunity",
        type: "single",
      },
      {
        name: "opportunities",
        type: "collection",
      },
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
