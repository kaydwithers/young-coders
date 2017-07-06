<template lang="pug">
textarea.input-reset.ba.b--black-20.pa3.db.w-100.h4(
  id="'#' + 'name'" 
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
