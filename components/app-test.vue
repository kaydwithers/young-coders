<template lang="pug">
div
  p Hello
  styled-button
    I am pink
</template>

<script>
import { styled } from 'styletron-vue'
import appHeading from '~/components/atoms/app-heading'
import appParagraph from '~/components/atoms/app-paragraph'

const StyledButton = styled('div', {
  color: 'pink'
})

export default {
  props: ['post'],
  components: {
    appHeading,
    appParagraph,
    StyledButton
  }
}
</script>

<style>

</style>
