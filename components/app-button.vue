<template lang="pug">
button.f6.link.pointer.dim.pa3.dib.ba.bw1.b--black-60.ttu(
  :class="{ 'bg-hot-pink': secondary, 'bg-transparent': primary }"
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
