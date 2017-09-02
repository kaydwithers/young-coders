<template lang="pug">
a.pointer.f5.f4-ns.b0.dib.bn.br3.dim.pa3.link.white.hover-white.lh-1(
  :href='destination' 
  :class="{ 'bg-blue': primary, 'bg-app-orange': secondary }" 
  :target="target" 
) {{ text }}
</template>

<script>
export default {
  name: 'app-button',
  props: {
    text: { type: String, default: '[PH] Button' },
    destination: { type: String, default: '' },
    primary: { type: Boolean, default: false },
    secondary: { type: Boolean, default: false },
    target: { type: String, default: '' }
  }
}
</script>

<style lang="scss">
button {
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  font-family: inherit;
  transition: all .15s ease;
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
}
</style>
