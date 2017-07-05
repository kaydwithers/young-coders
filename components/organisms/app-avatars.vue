<template lang="pug">
.bg-white
  .mw9.center.ph3.ph4-ns.pv5.pv6-ns
    .tc
      app-heading(size='2' text='The team')

    .db.flex-ns
      .w-100.w-25-ns.ph4.tc
        img.db.ba.br-100.bw3.b--black-20.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/v1499262182/avatar-1_swz7b2.jpg')
        app-paragraph(size='5' text='Kruti')

      .w-100.w-25-ns.ph4.tc
        img.ba.br-100.bw3.b--black-20.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/v1499262182/avatar-4_ehwbbi.jpg')
        app-paragraph(size='5' text='Herbert')

      .w-100.w-25-ns.ph4.tc
        img.ba.br-100.bw3.b--black-20.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/v1499262182/avatar-5_dwk7t8.jpg')
        app-paragraph(size='5' text='Sally')

      .w-100.w-25-ns.ph4.tc
        img.ba.br-100.bw3.b--black-20.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/v1499262182/avatar-2_j5lg7c.jpg')
        app-paragraph(size='5' text='Fred')
</template>

<script>
import appHeading from '~/components/atoms/app-heading'
import appParagraph from '~/components/atoms/app-paragraph'

export default {
  name: 'app-footer',
  components: {
    appHeading,
    appParagraph
  }
}
</script>

<style>

</style>
