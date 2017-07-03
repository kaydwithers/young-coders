<template lang="pug">
.bg-black-05
  .mw9.center.ph3.ph5-ns.pv6
    .w-100.tc
      app-heading(size='2' text='How it works')

    .flex
      .w100.w-25-ns.ph4.tc
        app-paragraph(size='4' text='1. Join us at our location.')

      .w100.w-25-ns.ph4.tc
        app-paragraph(size='4' text='2. Learn some code. Build animations, get help from professionals.')

      .w100.w-25-ns.ph4.tc
        app-paragraph(size='4' text='3. Show off things you have built to your friends.')

      .w100.w-25-ns.ph4.tc
        app-paragraph(size='4' text='4. Return once a month to learn new skills.')
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
