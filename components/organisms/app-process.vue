<template lang="pug">
.bg-lg-green
  .mw9.center.ph3.ph4-ns.pv5.pv6-ns
    .w-100.tc
      app-heading(size='2', text='How it works', customclass='white')
    .db.flex-ns.tc-ns
      .w-100.w-25-ns.ph4-ns
        img(src='//images.contentful.com/f25yij3y7fx1/2pbTltxs32EyCicKa4864I/315fda947c3e4463273cf2d16b79bcf3/step_1.png', alt='Step1', height='42', width='42')
        app-paragraph(size='4', text='1. Join us at our location.', customclass='white')
      .w-100.w-25-ns.ph4-ns
        img(src='//images.contentful.com/f25yij3y7fx1/2pbTltxs32EyCicKa4864I/315fda947c3e4463273cf2d16b79bcf3/step_2.png', alt='Step2', height='42', width='42')
        app-paragraph(size='4', text='2. Learn some code. Build animations, get help from professionals.', customclass='white')
      .w-100.w-25-ns.ph4-ns
        img(src='//images.contentful.com/f25yij3y7fx1/2pbTltxs32EyCicKa4864I/315fda947c3e4463273cf2d16b79bcf3/step_3.png', alt='Step3', height='42', width='42')
        app-paragraph(size='4', text='3. Show off things you have built to your friends.', customclass='white')
      .w-100.w-25-ns.ph4-ns
        img(src='//images.contentful.com/f25yij3y7fx1/2pbTltxs32EyCicKa4864I/315fda947c3e4463273cf2d16b79bcf3/step_4.png', alt='Step4', height='42', width='42')
        app-paragraph(size='4', text='4. Return once a month to learn new skills.', customclass='white')
</template>

<script>
import { cdaClient } from '~/plugins/contentful-client.js'
import appHeading from '~/components/atoms/app-heading'
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
    appParagraph
  }
}
</script>

<style>

</style>
