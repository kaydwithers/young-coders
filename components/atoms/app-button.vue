<template lang="pug">
button.f4.pointer.pa3.b0.dib.bn.br3.white(
  :class="{ 'bg-hot-pink': secondary, 'bg-blue': primary }"
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

<style>
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
