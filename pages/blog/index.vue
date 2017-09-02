<template lang="pug">
.blog-index
  app-hero(:hero='hero' text='Blog' hero-small)
  .bg-white
    .mw9.center.ph3.ph4-ns.pv6
      .w-100
        app-heading(size='2' text='Blog')
        .p4.mb0(v-html="'All articles' + ' (' + posts.length + ')'")

  .bg-lg-purple
    .mw9.center.ph3.ph4-ns.pv5.pv6-ns
      app-heading.tc(size='2' text='Latest blog posts' custom-class='white')

      .db.flex-ns.justify-center
        .w-100.w-50-m.w-third-l(v-for='post in posts')
          article-preview(:post="post")

  twitter-head-card

</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import ArticlePreview from '~/components/article-preview.vue'
import appHeading from '~/components/atoms/app-heading'
import appHero from '~/components/organisms/app-hero'
import appParagraph from '~/components/atoms/app-paragraph'
import twitterHeadCard from '~/components/atoms/twitter-head-card'

const client = createClient()

export default {
  name: 'blog',

  head: {
    title: 'Young Coders ʕ•ᴥ•ʔ — Blog',
    meta: [
      { hid: 'description', name: 'description', content: 'Blog' }
    ]
  },

  asyncData ({ env, params }) {
    return Promise.all([
      client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt'
      }),
      client.getEntries({
        'content_type': env.CTF_HERO_ID,
        order: '-sys.createdAt'
      })
    ]).then(([entries, hero]) => {
      return {
        posts: entries.items,
        hero: hero.items[0]
      }
    })
  },

  components: {
    ArticlePreview,
    appHeading,
    appHero,
    appParagraph,
    twitterHeadCard
  }
}
</script>
