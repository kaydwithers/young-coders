<template lang="pug">
h2.f2.fw7.lh-title.ttu.mb3(:class='customClass') {{ text }}
</template>

<script>
export default {
  name: 'app-heading',
  props: {
    text: { default: 'Heading' },
    customClass: { default: 'black-70' }
  }
}
</script>

<style lang="sass">

</style>
