<template lang="pug">
h2.f2.fw7.lh-title.ttu.mb3.black-70 {{ text }}
</template>

<script>
export default {
  name: 'app-button',
  props: {
    text: { default: 'Heading' }
  }
}
</script>

<style lang="sass">

</style>
