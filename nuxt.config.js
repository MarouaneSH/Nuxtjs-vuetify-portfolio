const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */

  head: {
    title: "Marouane Souah | Full stack web and mobile developer",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Hi, I'm Marouane souah and i'm a full stack web and mobile developer from Morocco, Essaouira ( Laravel & VueJS expert)" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:300,400' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
 loading: {color : '#ffff', height: "4px"},

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl',
    '@fortawesome/fontawesome-svg-core/styles.css'

  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/anime',
    '~/plugins/fontawesome.js',
    { src: '~plugins/ga.js', ssr: false }
 
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
