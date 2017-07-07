<template lang="pug">
div
  app-hero(:hero='hero' text='Blog' hero-small)
  .bg-white
    .mw9.center.ph3.ph4-ns.pv6
      .w-100
        app-heading(size='2' text='Blog')
        app-paragraph(size='3' :text="'All articles' + ' (' + posts.length + ')'")

  .bg-lg-purple
    .mw9.center.ph3.ph4-ns.pv5.pv6-ns
      app-heading.tc(size='2' text='Latest blog posts' custom-class='white')

      .db.flex-ns.justify-center
        .w-100.w-third-ns(v-for='post in posts')
          article-preview(:post="post")
</template>

<script>
import { cdaClient } from '../../plugins/contentful-client.js'
import ArticlePreview from '~components/article-preview.vue'
import appHeading from '~/components/atoms/app-heading'
import appHero from '~/components/organisms/app-hero'
import appParagraph from '~/components/atoms/app-paragraph'

export default {

  asyncData ({ params }) {
    return Promise.all([
      cdaClient.getEntries({
        'content_type': process.env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt'
      }),
      cdaClient.getEntries({
        'content_type': process.env.CTF_HERO_ID,
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
    appParagraph
  }
}
</script>

<style>

</style>
