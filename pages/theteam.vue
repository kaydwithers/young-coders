<template lang="pug">
div
  app-hero(:hero='hero' text='The Team' heroSmall)
  .bg-white 
  .mw9.center.ph3.ph4-ns.pv5.pv6-ns 
    .db.flex-ns
      .w-100.w-25-ns.ph4.tc
        img.db.ba.br-100.bw3.b--black-20.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/v1499262182/avatar-1_swz7b2.jpg')
        app-paragraph(size='5' text='Kruti')
        app-paragraph(size='6', text='Founder')

      .w-100.w-25-ns.ph4.tc
        img.ba.br-100.bw3.b--black-20.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/v1499262182/avatar-4_ehwbbi.jpg')
        app-paragraph(size='5', text='Kayd Withers')
        app-paragraph(size='6', text='Lead Workshop Manager and Web Developer')

      .w-100.w-25-ns.ph4.tc
        img.ba.br-100.bw3.b--black-20.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/v1499262182/avatar-5_dwk7t8.jpg')
        app-paragraph(size='5', text='Kavita Mevada')
        app-paragraph(size='6', text='Lead Workshop Manager')

      .w-100.w-25-ns.ph4.tc
        img.ba.br-100.bw3.b--black-20.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/v1499262182/avatar-2_j5lg7c.jpg')
        app-paragraph(size='5', text='Hayley Carra')
        app-paragraph(size='6', text='Editor-in-Chief')

    .db.flex-ns
      .w-100.w-25-ns.ph4.tc
        img.db.ba.br-100.bw3.b--black-20.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/v1499262182/avatar-1_swz7b2.jpg')
        app-paragraph(size='5', text='Shuyen Phoon') 
        app-paragraph(size='6', text='Editor-in-Chief')

      .w-100.w-25-ns.ph4.tc
        img.ba.br-100.bw3.b--black-20.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/v1499262182/avatar-4_ehwbbi.jpg')
        app-paragraph(size='5', text='Sharath Raj')
        app-paragraph(size='6', text='Web Developer')

      .w-100.w-25-ns.ph4.tc
        img.ba.br-100.bw3.b--black-20.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/v1499262182/avatar-5_dwk7t8.jpg')
        app-paragraph(size='5', text='Dolly Desai')
        app-paragraph(size='6', text='Event Organizer')

      .w-100.w-25-ns.ph4.tc
        img.ba.br-100.bw3.b--black-20.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/v1499262182/avatar-2_j5lg7c.jpg')
        app-paragraph(size='5', text='Raffi Martins')
        app-paragraph(size='6', text='Art Director')
  </div>
</form>
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
