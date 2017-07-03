<template lang="pug">
div
  app-hero(:hero="hero" heroSmall)
  .bg-white
    .mw9.center.ph3.ph5-ns.pv6
      .w-100
        app-heading(size='2' :text='page.fields.heading')
        app-paragraph(size='3' :text='page.fields.content')

  // app-test
</template>

<script>
import { cdaClient } from '~/plugins/contentful-client.js'
import appHeading from '~/components/atoms/app-heading'
import appHero from '~/components/organisms/app-hero'
import appParagraph from '~/components/atoms/app-paragraph'
import appTest from '~/components/app-test'

export default {
  name: 'about',
  asyncData ({ params }) {
    return Promise.all([
      cdaClient.getEntries({
        'content_type': process.env.CTF_PAGE_ID
      }),
      cdaClient.getEntries({
        'content_type': process.env.CTF_HERO_ID,
        order: '-sys.createdAt'
      })
    ]).then(([page, hero]) => {
      return {
        hero: hero.items[0],
        page: page.items[0]
      }
    }).catch(console.error)
  },
  components: {
    appHeading,
    appHero,
    appParagraph,
    appTest
  }
}
</script>

<style>

</style>
