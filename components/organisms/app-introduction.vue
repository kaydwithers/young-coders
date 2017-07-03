<template lang="pug">
.bg-white
  .mw8.center.pv6.ph3.ph4-ns.tc
    app-heading(size='2' :text='introduction.fields.heading')
    app-paragraph(size='4' :text='introduction.fields.content')
    app-button(primary text='Button')
</template>

<script>
import appHeading from '~/components/atoms/app-heading'
import appParagraph from '~/components/atoms/app-paragraph'
import appButton from '~/components/atoms/app-button'

export default {
  name: 'app-introduction',
  props: ['introduction'],
  components: {
    appHeading,
    appParagraph,
    appButton
  }
}
</script>

<style lang="sass">

</style>
