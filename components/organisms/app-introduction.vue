<template lang="pug">
.bg-white
  .w-100.pv6.f6.ph3.ph4-ns
    .mw7.center.ph3-ns
      .tc
        app-heading(size='2' :text='introduction.fields.heading')
        app-paragraph(:text='introduction.fields.content')
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
