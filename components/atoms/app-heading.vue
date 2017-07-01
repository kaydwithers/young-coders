<template lang="pug">
h1.f1.lh-title.mb4(v-if="size === '1'" :class="customClass")
  vue-markdown(v-html='text')

h2.f2.lh-title.mb4(v-else-if="size === '2'" :class="customClass")
  vue-markdown(v-html='text')

h3.f3.lh-title.mb4(v-else-if="size === '3'" :class="customClass")
  vue-markdown(v-html='text')

h4.f4.lh-title.mb4(v-else-if="size === '4'" :class="customClass")
  vue-markdown(v-html='text')

h5.f5.lh-title.mb4(v-else-if="size === '5'" :class="customClass")
  vue-markdown(v-html='text')

h6.f6.lh-title.mb4(v-else-if="size === '6'" :class="customClass")
  vue-markdown(v-html='text')
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'app-heading',
  props: {
    text: { default: '[PH] Heading' },
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
