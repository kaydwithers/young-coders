<template lang="pug">
.bg-white
  .w-100.pv6.f6.ph3.ph4-ns
    .mw7.center.ph3-ns
      .tc
        app-heading(text='Lil\' about me')
        app-paragraph(text='Praesent ac dignissim diam. Aliquam lobortis elit et sapien eleifend, at sollicitudin metus elementum. Morbi imperdiet id ipsum at tristique. Nam suscipit tristique sem, laoreet leo. Maecenas eget ante ipsum.')
        app-button(primary text='Button')
</template>

<script>
import appHeading from '~/components/app-heading'
import appParagraph from '~/components/app-paragraph'
import appButton from '~/components/app-button'

export default {
  components: {
    appHeading,
    appParagraph,
    appButton
  }
}
</script>

<style lang="sass">

</style>
