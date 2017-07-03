<template lang="pug">
.bg-app-gray
  .mw9.center.ph3.ph5-ns.pv6
    .tc
      app-heading(size='2' text='The team')

    .flex
      .w100.w-25-ns.ph4.tc
        img.db.ba.br-100.bw3.b--black-20.mb4(src='https://unsplash.it/400/400')
        app-paragraph(size='5' text='Kruti')

      .w100.w-25-ns.ph4.tc
        img.ba.br-100.bw3.b--black-20.mb4(src='https://unsplash.it/400/400')
        app-paragraph(size='5' text='Herbert')

      .w100.w-25-ns.ph4.tc
        img.ba.br-100.bw3.b--black-20.mb4(src='https://unsplash.it/400/400')
        app-paragraph(size='5' text='Sally')

      .w100.w-25-ns.ph4.tc
        img.ba.br-100.bw3.b--black-20.mb4(src='https://unsplash.it/400/400')
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
