<template lang="pug">
div
  app-hero(:hero='hero' text='Contact us' hero-small)
  .bg-white
    .mw9.center.ph3.ph4-ns.pv6
      .w-100
        app-heading(size='2' :text='page.fields.heading')
        app-paragraph(size='4' :text='page.fields.content' custom-class='black-50 lh-2 mb0')

  .bg-lg-blue-light
    .mw9.center.ph3.ph4-ns.pv6
      .w-100
        form#contact-form(method='post', action='#', netlify='')
        input.form-control(name='name', type='text', placeholder='Your Name', required='')
        input.form-control(name='email', type='email', placeholder='Your Email', required='')
        textarea.form-control(name='message', placeholder='Message', rows='5', required='')
        input.form-control.submit(type='submit', value='SEND MESSAGE')
</template>

<script>
import { cdaClient } from '~/plugins/contentful-client.js'
import appHeading from '~/components/atoms/app-heading'
import appHero from '~/components/organisms/app-hero'
import appParagraph from '~/components/atoms/app-paragraph'

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
    appParagraph
  }
}
</script>

<style>

</style>
