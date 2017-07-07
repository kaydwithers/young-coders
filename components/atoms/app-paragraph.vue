<template lang="pug">
vue-markdown.f2.f1-ns.lh-2(
  v-if="size === '1'" :class="customClass"
) {{ text }}

vue-markdown.f3.f2-ns.lh-2(
  v-else-if="size === '2'" :class="customClass"
) {{ text }}

vue-markdown.f4.f3-ns.lh-2(
  v-else-if="size === '3'" :class="customClass"
) {{ text }}

vue-markdown.f5.f4-ns.lh-2(
  v-else-if="size === '4'" :class="customClass"
) {{ text }}

vue-markdown.f6.f5-ns.lh-2(
  v-else-if="size === '5'" :class="customClass"
) {{ text }}

vue-markdown.f6.f6-ns.lh-2(
  v-else-if="size === '6'" :class="customClass"
) {{ text }}
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'app-paragraph',
  props: {
    text: { default: '[PH] Paragraph' },
    customClass: { default: 'black-50 mb4' },
    size: { default: '1' }
  },
  components: {
    VueMarkdown
  }
}
</script>

<style lang="sass">

</style>
