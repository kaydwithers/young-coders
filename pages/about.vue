<template lang="pug">
.bg-white
  .w-100.pv6.f6.ph3.ph4-ns
    .mw7.center.ph3-ns
      app-heading(size='1' text='About')
      app-paragraph(size='1' text='This is the about page')
</template>

<script>
import appHeading from '~/components/app-heading'
import appParagraph from '~/components/app-paragraph'

export default {
  name: 'about',
  components: {
    appHeading,
    appParagraph
  }
}
</script>

<style>

</style>
