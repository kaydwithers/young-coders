<template lang="pug">
div
  main(role='main')
    app-navigation.z-2
    nuxt
    app-footer

</template>

<script>
  import appFooter from '~/components/organisms/app-footer'
  import appHero from '~/components/organisms/app-hero'
  import appNavigation from '~components/organisms/app-navigation.vue'
  import appNavigationLinks from '~components/molecules/app-navigation-links.vue'

  export default {
    components: {
      appFooter,
      appHero,
      appNavigation,
      appNavigationLinks
    }
  }
</script>

<style>

</style>
