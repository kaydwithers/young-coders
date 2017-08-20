<template lang="pug">
a.pointer.f5.f4-ns.b0.dib.bn.br3.dim.pa3.link.white.hover-white(
  :href='destination' 
  :class="{ 'bg-app-orange': secondary, 'bg-blue': primary }" 
  :target="target" 
) {{ text }}
</template>

<script>
export default {
  name: 'app-button',
  props: {
    text: { default: '[PH] Button' },
    destination: { default: '' },
    primary: { default: false },
    secondary: { default: false },
    target: { default: false }
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
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
}
</style>
