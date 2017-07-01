<template lang="pug">
vue-markdown.lh-copy.f5.f4-ns.mb4.black-70(:class='customClass') {{ text }}
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'app-paragraph',
  props: {
    text: { default: '[PH] Paragraph' },
    customClass: { default: 'black-70' },
    size: { default: '1' }
  },
  components: {
    VueMarkdown
  }
}
</script>

<style lang="sass">

</style>
