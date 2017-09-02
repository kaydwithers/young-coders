<template lang="pug">
vue-markdown(v-if="size === '1'" :class="customClass") # {{text}}
vue-markdown(v-else-if="size === '2'" :class="customClass") ## {{text}}
vue-markdown(v-else-if="size === '3'" :class="customClass") ### {{text}}
vue-markdown(v-else-if="size === '4'" :class="customClass") #### {{text}}
vue-markdown(v-else-if="size === '5'" :class="customClass") ##### {{text}}
vue-markdown(v-else-if="size === '6'" :class="customClass") ###### {{text}}
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'app-heading',
  props: {
    text: { default: '[PH] Heading' },
    customClass: { default: 'black-70' },
    size: { default: '1' }
  },
  components: {
    VueMarkdown
  }
}
</script>

<style lang="scss">
h1 {
  font-size: 2.25rem;
  line-height: 1.5;
  margin-bottom: .5rem;

  @media screen and (min-width: 30em) {
    font-size: 3rem;
  }
}

h2 {
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 2rem;

  @media screen and (min-width: 30em) {
    font-size: 2.25rem;
  }
}

h3 {
  font-size: 1.25rem;
  line-height: 1.5;
  margin-bottom: 2rem;

  @media screen and (min-width: 30em) {
    font-size: 1.5rem;
  }
}

h4 {
  font-size: 1rem;
  line-height: 1.25;
  margin-bottom: 2rem;

  @media screen and (min-width: 30em) {
    font-size: 1.25rem;
  }
}

h5 {
  font-size: .875rem;
  line-height: 1.25;
  margin-bottom: 2rem;

  @media screen and (min-width: 30em) {
    font-size: 1rem;
  }
}

h6 {
  font-size: .75rem;
  line-height: 1.25;
  margin-bottom: 2rem;

  @media screen and (min-width: 30em) {
    font-size: .875rem;
  }
}
</style>
