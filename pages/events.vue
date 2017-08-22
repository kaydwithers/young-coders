<template lang="pug">
.events
  app-hero(:hero='hero' text='Events' hero-small)
  app-events

  twitter-head-card

</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import appHero from '~/components/organisms/app-hero'
import appHeading from '~/components/atoms/app-heading'
import appParagraph from '~/components/atoms/app-paragraph'
import appEvents from '~/components/organisms/app-events'
import twitterHeadCard from '~/components/atoms/twitter-head-card'

const client = createClient()

export default {
  name: 'events',

  head: {
    title: 'Young Coders ʕ•ᴥ•ʔ — Events',
    meta: [
      { hid: 'description', name: 'description', content: 'Events' }
    ]
  },

  asyncData ({ params }) {
    return Promise.all([
      client.getEntries({
        'content_type': process.env.CTF_PAGE_ID,
        order: '-sys.createdAt'
      }),
      client.getEntries({
        'content_type': process.env.CTF_HERO_ID,
        order: '-sys.createdAt'
      })
    ]).then(([page, hero]) => {
      return {
        hero: hero.items[0],
        page: page.items[2]
      }
    }).catch(console.error)
  },

  components: {
    appHero,
    appHeading,
    appParagraph,
    appEvents,
    twitterHeadCard
  }
}
</script>

<style>

</style>
