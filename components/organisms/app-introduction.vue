<template lang="pug">
.bg-white
  .mw8.center.pv5.pv6-ns.ph3.ph4-ns.tc
    app-heading(size='2' text='Lil&rsquo; about us')
    app-paragraph(size='4' text='Young Coders is an initiative by a few developers and technology enthusiasts to teach young kids programming. We believe education should be free and hence our workshops are free for everyone.')
    app-button(primary href='mailto:hello@youngcodersau.com' text='Email us')
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
