<template lang="pug">
input.input-reset.ba.b--black-20.pa3.db.w-100(
  id='"#" + "name"' 
  type='text' 
  name='name' 
  placeholder='placeholder'
)
</template>

<script>
export default {
  name: 'app-input',
  props: {
    name: { default: 'lastname' },
    placeholder: { default: '[PH] Placeholder' }
  }
}
</script>

<style>

</style>
