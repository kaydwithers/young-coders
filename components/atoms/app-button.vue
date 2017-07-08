<template lang="pug">
button.pointer.f5.f4-ns.pa3.b0.dib.bn.br3(
  :class="{ 'bg-hot-pink': secondary, 'bg-blue': primary }"
)
  a.link.white.hover-white(:href='destination') {{ text }}
</template>

<script>
export default {
  name: 'app-button',
  props: {
    text: { default: '[PH] Button' },
    destination: { default: '' },
    primary: { default: true },
    secondary: { default: false }
  }
}
</script>

<style lang="scss" scoped>
button {
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  font-family: inherit;
  transition: all .15s ease;
}

button:hover {
  background-color: var(--app-blue-light);
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
}
</style>
