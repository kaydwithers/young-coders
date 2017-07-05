const ctfConfig = require('./plugins/contentful-client').config
const cdaClient = require('./plugins/contentful-client').cdaClient
const cmaClient = require('./plugins/contentful-client').cmaClient
const { join } = require('path')

const config = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Young Coders — Kruti',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The Coding Workshiop for kids' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  css: [ 
    'tachyons/css/tachyons.css',
    join(__dirname, 'css/main.css')
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2199e8' },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    postcss: [
      require('autoprefixer')({
        browsers: ['> 5%']
      })
    ]
  },

  /*
  ** ᕕ( ᐛ )ᕗ CTF-BLOG-IN-5-MINUTESnpm run de
  ** Make client available everywhere via Nuxt plugins
  */
  plugins: ['~plugins/contentful-client'],

  /*
  ** ᕕ( ᐛ )ᕗ CTF-BLOG-IN-5-MINUTES
  ** Get all blog posts from Contentful
  ** and generate the needed files upfront
  **
  ** Included:
  ** - blog posts
  ** - available blog post tags
  */
  generate: {
    routes () {
      return Promise.all([
        cdaClient.getEntries({
          'content_type': ctfConfig.CTF_BLOG_POST_TYPE_ID
        }),
        cmaClient.getSpace(ctfConfig.CTF_SPACE_ID)
          .then(space => space.getContentType(ctfConfig.CTF_BLOG_POST_TYPE_ID))
      ])
      .then(([entries, postType]) => {
        return [
          ...entries.items.map(entry => `blog/${entry.fields.slug}`),
          ...postType.fields.find(field => field.id === 'tags').items.validations[0].in.map(tag => `tags/${tag}`)
        ]
      })
    }
  },

  env: ctfConfig
}

module.exports = config
