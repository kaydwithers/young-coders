<template lang="pug">
p.lh-copy.f5.f4-ns.mb4.black-70 {{ text }}
</template>

<script>
export default {
  name: 'app-paragraph',
  props: {
    text: { default: 'Paragraph' }
  }
}
</script>

<style lang="sass">

</style>
