<template lang="pug">
div
  main(role='main')
    app-navigation
    app-hero
    nuxt
    app-footer
</template>

<script>
  import appFooter from '~/components/app-footer'
  import appHero from '~/components/app-hero'
  import appNavigation from '~components/app-navigation.vue'

  export default {
    components: {
      appFooter,
      appHero,
      appNavigation
    }
  }
</script>

<style>
@font-face {
  font-family: "Montserrat";
  src: url("../assets/fonts/Montserrat-Regular.otf") format("otf");
  font-weight: 400;
}

@font-face {
  font-family: "Montserrat";
  src: url("../assets/fonts/Montserrat-SemiBold.otf") format("otf");
  font-weight: 600;
}

html {
  overflow-y: scroll;
  min-height: 100%;
}

body {
  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
}
</style>
