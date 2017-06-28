<template>
  <div>
    <main role="main">
      <nuxt/>
    </main>
  </div>
</template>

<script>
  import Greeting from '~components/greeting.vue'

  export default {
    components: {
      Greeting
    }
  }
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
}
</style>
