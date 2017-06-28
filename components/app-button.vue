<template lang="pug">
button.f6.link.dim.pa3.dib.ba.bw1.b--black.ttu(
  :class="{ 'bg-hot-pink': secondary, 'bg-near-white': primary }"
  @click='click'
) {{ text }}
</template>

<script>
export default {
  name: 'app-button',
  props: {
    click: { default: 'explosion' },
    text: { default: 'Do not click!' },
    primary: { default: true },
    secondary: { default: false }
  }
}
</script>

<style lang="sass">

</style>
