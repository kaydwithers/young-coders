<template lang="pug">
.bg-lg-green
  .mw9.center.ph3.ph4-ns.pv5.pv6-ns
    .w-100.tc
      app-heading(size='2', text='How it works', custom-class='white')

    .db.flex-ns.justify-center.flex-wrap.tc
      .w-100.w-50-m.w-25-l.ph4-ns
        img.mb4(
          src='http://res.cloudinary.com/dvjpaoffl/image/upload/v1499397893/Young%20Coders/how_it_works_01.png' 
          alt=''
        )
        app-paragraph(
          size='4' 
          text='Join us at our location.' 
          custom-class='white'
        )

      .w-100.w-50-m.w-25-l.ph4-ns
        img.mb4(
          src='http://res.cloudinary.com/dvjpaoffl/image/upload/v1499397893/Young%20Coders/how_it_works_02.png'
          alt=''
        )
        app-paragraph(
          size='4' 
          text='Learn some code. Build animations, get help from professionals.' 
          custom-class='white'
        )

      .w-100.w-50-m.w-25-l.ph4-ns
        img.mb4(
          src='http://res.cloudinary.com/dvjpaoffl/image/upload/v1499397893/Young%20Coders/how_it_works_03.png' 
          alt=''
        )
        app-paragraph(
          size='4' 
          text='Show off things you have built to your friends.' 
          custom-class='white'
        )

      .w-100.w-50-m.w-25-l.ph4-ns
        img.mb4(
          src='http://res.cloudinary.com/dvjpaoffl/image/upload/v1499397893/Young%20Coders/how_it_works_04.png' 
          alt='' 
        )
        app-paragraph(
          size='4' 
          text='Return once a month to learn new skills.' 
          custom-class='white'
        )

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
