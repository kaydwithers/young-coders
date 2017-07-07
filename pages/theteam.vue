<template lang="pug">
div
  app-hero(:hero='hero' text='The Team' hero-small)
  .bg-white 
  .mw9.center.ph3.ph4-ns.pv5.pv6-ns 
    .w-100 
      app-avatars
     
  </div>
</form>
</template>

<script>
import { cdaClient } from '~/plugins/contentful-client.js'
import appHeading from '~/components/atoms/app-heading'
import appHero from '~/components/organisms/app-hero'
import appParagraph from '~/components/atoms/app-paragraph'
import appAvatars from '~/components/organisms/app-avatars'

export default {
  name: 'about',
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
        page: page.items[2]
      }
    }).catch(console.error)
  },
  components: {
    appHeading,
    appHero,
    appParagraph,
    appAvatars
  }
}
</script>

<style>

</style>
