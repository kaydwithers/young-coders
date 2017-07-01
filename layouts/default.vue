<template lang="pug">
div
  main(role='main')
    app-navigation
    // styled-button I am pink
    nuxt
    app-footer
</template>

<script>
  import { styled } from 'styletron-vue'
  import appFooter from '~/components/organisms/app-footer'
  import appHero from '~/components/organisms/app-hero'
  import appNavigation from '~components/organisms/app-navigation.vue'

  const StyledButton = styled('div', {
    color: 'pink'
  })

  export default {
    components: {
      appFooter,
      appHero,
      appNavigation,
      StyledButton
    }
  }
</script>

<style>
:root {
  --blue: #6772e5;
}

@font-face {
  font-family: "Montserrat";
  font-weight: 400;
  font-style: normal;
  src: url("/Montserrat-Regular.ttf");
  font-display: swap;
}

@font-face {
  font-family: "Montserrat";
  font-weight: 600;
  font-style: normal;
  src: url("/Montserrat-SemiBold.ttf");
  font-display: swap;
}

html {
  overflow-y: scroll;
  min-height: 100%;
}

body {
  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
}

.blue { color: var(--blue); }
.bg-blue { background-color: var(--blue); }

a { color: var(--blue); }
a:hover { color: #45b2e8 }

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
}

img {
  max-width: 100%;
  font-style: italic;
  vertical-align: middle;
}

  img[width],
  img[height] {
    max-width: none;
  }
</style>
