<template lang="pug">
div
  app-hero(:hero="hero" heroSmall)
  .bg-white
    .w-100.pv6.f6.ph3.ph4-ns
      .mw7.center.ph3-ns
        app-heading(size='1' :text='page.fields.heading')
        app-paragraph(size='1' :text='page.fields.content')
</template>

<script>
import { cdaClient } from '~/plugins/contentful-client.js'
import appHero from '~/components/organisms/app-hero'
import appHeading from '~/components/atoms/app-heading'
import appParagraph from '~/components/atoms/app-paragraph'

export default {
  name: 'events',
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
        page: page.items[1]
      }
    }).catch(console.error)
  },
  components: {
    appHero,
    appHeading,
    appParagraph
  }
}
</script>

<style>

</style>
