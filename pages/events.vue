<template lang="pug">
div
  app-hero(:hero='hero' text='Events' heroSmall)
  .bg-white
    .mw9.center.ph3.ph4-ns.pv6
      .w-100
        app-events
</template>

<script>
import { cdaClient } from '~/plugins/contentful-client.js'
import appHero from '~/components/organisms/app-hero'
import appHeading from '~/components/atoms/app-heading'
import appParagraph from '~/components/atoms/app-paragraph'
import appEvents from '~/components/organisms/app-events'

export default {
  name: 'events',
  asyncData ({ params }) {
    return Promise.all([
      cdaClient.getEntries({
        'content_type': process.env.CTF_PAGE_ID,
        order: '-sys.createdAt'
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
    appParagraph,
    appEvents
  }
}
</script>

<style>

</style>
