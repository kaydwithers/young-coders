<template lang="pug">
.bg-lg-green
  .mw9.center.ph3.ph4-ns.pv5.pv6-ns
    .w-100.tc
      app-heading(size='2' text='How it works' customClass='white')

    .db.flex-ns.tc-ns
      .w-100.w-25-ns.ph4-ns
        app-paragraph(size='4' text='1. Join us at our location.' customClass='white')

      .w-100.w-25-ns.ph4-ns
        app-paragraph(size='4' text='2. Learn some code. Build animations, get help from professionals.' customClass='white')

      .w-100.w-25-ns.ph4-ns
        app-paragraph(size='4' text='3. Show off things you have built to your friends.' customClass='white')

      .w-100.w-25-ns.ph4-ns
        app-paragraph(size='4' text='4. Return once a month to learn new skills.' customClass='white')
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
