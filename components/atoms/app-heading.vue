<template lang="pug">
h1.f2.f1-ns.lh-title(v-if="size === '1'" :class="customClass")
  vue-markdown(v-html='text')

h2.f3.f2-ns.lh-title(v-else-if="size === '2'" :class="customClass")
  vue-markdown(v-html='text')

h3.f4.f3-ns.lh-title(v-else-if="size === '3'" :class="customClass")
  vue-markdown(v-html='text')

h4.f5.f4-ns.lh-title(v-else-if="size === '4'" :class="customClass")
  vue-markdown(v-html='text')

h5.f6.f5-ns.lh-title(v-else-if="size === '5'" :class="customClass")
  vue-markdown(v-html='text')

h6.f6.f6-ns.lh-title(v-else-if="size === '6'" :class="customClass")
  vue-markdown(v-html='text')
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'app-heading',
  props: {
    text: { default: '[PH] Heading' },
    customClass: { default: 'black-70 mb4' },
    size: { default: '1' }
  },
  components: {
    VueMarkdown
  }
}
</script>

<style lang="sass">

</style>
