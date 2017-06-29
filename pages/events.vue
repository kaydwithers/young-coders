<template lang="pug">
.bg-white
  .w-100.pv6.f6.ph3.ph4-ns
    .mw7.center.ph3-ns
      app-heading(size='1' text='Events')
      app-paragraph(size='1' text='This is the events page')
</template>

<script>
import appHeading from '~/components/app-heading'
import appParagraph from '~/components/app-paragraph'

export default {
  name: 'events',
  components: {
    appHeading,
    appParagraph
  }
}
</script>

<style>

</style>
