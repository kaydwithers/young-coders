<template lang="pug">
.hero.pr.bg-black(:class="{ 'hero--small': heroSmall }")
  .hero__overlay.pa
  img(
    :src="hero.fields.heroImage.fields.file.url + '?fit=scale&w=350'"
    :srcset="`${hero.fields.heroImage.fields.file.url}?w=350 350w, ${hero.fields.heroImage.fields.file.url}?w=1000 1000w, ${hero.fields.heroImage.fields.file.url}?w=2000 2000w`"
    sizes="100vw"
  )
  .hero__text.pa.tc
    app-heading(size='1' :text='hero.fields.heading' customClass='white ttu ts-1 mb3')
    app-paragraph(size='2' :text='hero.fields.content' customClass='white ts-1')
    
</template>

<script>
import appParagraph from '~/components/atoms/app-paragraph'
import appHeading from '~/components/atoms/app-heading'

export default {
  name: 'app-hero',
  props: {
    hero: { default: 'hero' },
    heroSmall: { default: false }
  },
  components: {
    appHeading,
    appParagraph
  }
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
  width: 100%;
}

  .hero__text h1 {
    font-size: 4.5rem;
  }

.hero__overlay {
  background-color: rgba(0, 0, 0, .4);
  height: 100%;
  width: 100%;
}

.hero {
  height: 100vh;
}

  .hero--small {
    height: 50vh;
  }

  .hero img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
</style>
