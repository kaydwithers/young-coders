<template lang="pug">
div
  p Hello
</template>

<script>
import appHeading from '~/components/atoms/app-heading'

export default {
  props: ['post'],
  components: {
    appHeading
  }
}
</script>

<style>

</style>
