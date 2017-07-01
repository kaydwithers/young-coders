<template lang="pug">
.bg-black-05
  .pv6.ph3
    .tc
      app-heading(size='2' text='The team')

    .flex
      .w-25.ph3.tc
        img.db.ba.br-100.bw3.b--black-20.mb4(src='https://unsplash.it/400/400')
        p Kruti

      .w-25.ph3.tc
        img.ba.br-100.bw3.b--black-20.mb4(src='https://unsplash.it/400/400')
        p Herbert

      .w-25.ph3.tc
        img.ba.br-100.bw3.b--black-20.mb4(src='https://unsplash.it/400/400')
        p Sally

      .w-25.ph3.tc
        img.ba.br-100.bw3.b--black-20.mb4(src='https://unsplash.it/400/400')
        p Fred
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
