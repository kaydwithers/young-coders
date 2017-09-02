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
  import appNavigation from '~/components/organisms/app-navigation.vue'
  import appNavigationLinks from '~/components/molecules/app-navigation-links.vue'

  export default {
    components: {
      appFooter,
      appHero,
      appNavigation,
      appNavigationLinks
    }
  }
</script>

<style lang="scss">
.p1 {
  font-size: 2.25rem;
  line-height: 1.5;
  margin-bottom: .5rem;

  @media screen and (min-width: 30em) {
    font-size: 3rem;
  }
}

.p2 {
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 2rem;

  @media screen and (min-width: 30em) {
    font-size: 2.25rem;
  }
}

.p3 {
  font-size: 1.25rem;
  line-height: 1.5;
  margin-bottom: 2rem;

  @media screen and (min-width: 30em) {
    font-size: 1.5rem;
  }
}

p,
.p4 {
  font-size: 1rem;
  line-height: 2;
  margin-bottom: 2rem;

  @media screen and (min-width: 30em) {
    font-size: 1.25rem;
  }
}

.p5 {
  font-size: .875rem;
  line-height: 2;
  margin-bottom: 2rem;

  @media screen and (min-width: 30em) {
    font-size: 1rem;
  }
}

.p6 {
  font-size: .75rem;
  line-height: 1.5;
  margin-bottom: 2rem;

  @media screen and (min-width: 30em) {
    font-size: .875rem;
  }
}
</style>
