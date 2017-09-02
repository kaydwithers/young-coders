<template lang="pug">

</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'app-paragraph',
  props: {
    text: { default: '[PH] Paragraph' },
    customClass: { default: 'black-50 mb4 lh-2' },
    size: { default: '1' }
  },
  components: {
    VueMarkdown
  }
}
</script>

<style lang="scss">

</style>
