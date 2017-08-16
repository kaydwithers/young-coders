<template lang="pug">
div
  app-hero(:hero='hero' text='Thank you' hero-small)
  .bg-white
    .mw9.center.ph3.ph4-ns.pv6
      .w-100.tc
        form(name='thanks')
          app-paragraph(size='4' text='Thanks for contacting us. We will get back to you soon.')
          app-button(primary destination='/' text='Home')

</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import appButton from '~/components/atoms/app-button'
import appHeading from '~/components/atoms/app-heading'
import appHero from '~/components/organisms/app-hero'
import appParagraph from '~/components/atoms/app-paragraph'

const client = createClient()

export default {
  name: 'sucess',
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
    appButton,
    appHeading,
    appHero,
    appParagraph
  }
}
</script>

<style>

</style>
