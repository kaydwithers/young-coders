<template lang="pug">
.app-hero
  .hero.pr.bg-black.overflow-hidden(:class="{ 'hero--small': heroSmall }")

    .hero__overlay.pa.w-100.h-100

    img.w-100.h-100.db.db-m.dn-l(
      :src="hero.fields.heroImage.fields.file.url + '?fit=scale&w=350'"
      :srcset="`${hero.fields.heroImage.fields.file.url}?w=350 350w, ${hero.fields.heroImage.fields.file.url}?w=1000 1000w, ${hero.fields.heroImage.fields.file.url}?w=2000 2000w`"
      sizes="100vw"
    )

    video.w-100.h-100.dn.db-l(
      :poster='videoPoster' 
      preload 
      loop 
      autoplay 
      muted
    ) 
      source(type='video/mp4' :src='videoSource')

    .hero__text.pa.w-100.tc.ph3.o-100
      app-heading(size='1' :text='text' custom-class='white-90 ts-1 mb2')
      app-paragraph(v-if='hasParagraph' size='4' :text='hero.fields.content' custom-class='white ts-1')

</template>

<script>
import appParagraph from '~/components/atoms/app-paragraph'
import appHeading from '~/components/atoms/app-heading'

export default {
  name: 'app-hero',
  props: {
    hero: { default: 'hero' },
    heroSmall: { default: false },
    text: { default: '[PH] Text' },
    hasParagraph: { default: false },
    hasArrow: { default: false },
    videoSource: { default: 'http://res.cloudinary.com/dvjpaoffl/video/upload/v1499489853/Young%20Coders/coding.mp4' },
    videoPoster: { default: '' }
  },
  components: {
    appHeading,
    appParagraph
  }
}
</script>

<style>
.pr {
  position: relative;
}

.pa {
  position: absolute;
}

.hero__text {
  animation: var(--animation-fade-up);
  margin: 0 auto;
  top: 42%;
}

.hero__overlay {
  background-color: rgba(0, 0, 0, .2);
}

.hero {
  height: 80vh;
}

  .hero--small {
    height: 60vh;
  }

  .hero img,
  .hero video {
    object-fit: cover;
  }

.animation-fade-up 0% {
  opacity: 0;
  transform: translate3d(0, 10px, 0)
}

.animation-fade-up 75% {
  opacity: 0;
  transform: translate3d(0, 10px, 0)
}

.animation-fade-up 100% {
  opacity: 1;
  transform: translate3d(0, 0, 0)
}

@keyframes animation-fade-up {
  0% {
    opacity: 0;
    transform: translate3d(0, 10px, 0)
  }
  75% {
    opacity: 0;
    transform: translate3d(0, 10px, 0)
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0)
  }
}
</style>
