<template lang="pug">
.hero.pr
  .hero__overlay.pa
  img(src='https://unsplash.it/1920/1080?random')
  .hero__text.pa
    h1.f1.b.ttu.white Young Coders
</template>

<script>
export default {

}
</script>

<style scoped>
.pr {
  position: relative;
}

.pa {
  position: absolute;
}

.hero__text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.hero__overlay {
  background-color: rgba(0, 0, 0, .4);
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;

}

.hero img {
  height: 100vh;
  object-fit: cover;
  width: 100%;
}
</style>
