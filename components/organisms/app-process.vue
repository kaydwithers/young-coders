<template lang="pug">
.app-process
  .bg-lg-green
    .mw9.center.ph3.ph4-ns.pv5.pv6-ns
      .w-100.tc
        app-heading(size='2', text='How it works', custom-class='white')

      .db.flex-ns.justify-center.flex-wrap.tc
        .w-100.w-50-m.w-25-l.ph4
          img.mb2.mb4-ns(
            src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,w_auto,f_auto/v1499397893/Young%20Coders/how_it_works_01.png' 
            alt=''
          )
          .p4.white Join us at our location.

        .w-100.w-50-m.w-25-l.ph4
          img.mb2.mb4-ns(
            src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,w_auto,f_auto/v1499397893/Young%20Coders/how_it_works_02.png'
            alt=''
          )
          .p4.white Have fun and learn to code with help from industry professionals.

        .w-100.w-50-m.w-25-l.ph4
          img.mb2.mb4-ns(
            src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,w_auto,f_auto/v1499397893/Young%20Coders/how_it_works_03.png' 
            alt=''
          )
          .p4.white Show off your code to friends and family.

        .w-100.w-50-m.w-25-l.ph4
          img.mb2.mb4-ns(
            src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,w_auto,f_auto/v1499397893/Young%20Coders/how_it_works_04.png' 
            alt='' 
          )
          .p4.white Return once a month to learn new skills.

</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import appHeading from '~/components/atoms/app-heading'

const client = createClient()

export default {
  name: 'about',
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
    appHeading
  }
}
</script>

<style>

</style>
