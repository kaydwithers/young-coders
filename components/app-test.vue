<template lang="pug">
div
  p Hello
</template>

<script>
import appHeading from '~components/atoms/app-heading'
import appParagraph from '~components/atoms/app-paragraph'

export default {
  props: ['post'],
  components: {
    appHeading,
    appParagraph
  }
}
</script>

<style>

</style>
