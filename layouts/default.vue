<template lang="pug">
div
  main(role='main')
    app-navigation.z-2
    // styled-button I am pink
    nuxt
    app-footer

</template>

<script>
  import { styled } from 'styletron-vue'
  import appFooter from '~/components/organisms/app-footer'
  import appHero from '~/components/organisms/app-hero'
  import appNavigation from '~components/organisms/app-navigation.vue'
  import appNavigationLinks from '~components/molecules/app-navigation-links.vue'

  const StyledButton = styled('div', {
    color: 'pink'
  })

  export default {
    components: {
      appFooter,
      appHero,
      appNavigation,
      appNavigationLinks,
      StyledButton
    }
  }
</script>

<style>

</style>
