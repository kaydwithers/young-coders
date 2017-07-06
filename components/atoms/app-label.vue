<template lang="pug">
label.f4.db.mb3(
  for='name'
  id="'#' + 'name'" 
  type='text' 
  name='name' 
  placeholder='placeholder'
) {{ text }}
</template>

<script>
export default {
  name: 'app-label',
  props: {
    name: { default: 'lastname' },
    text: { default: '[PH] Last Name' }
  }
}
</script>

<style>

</style>
