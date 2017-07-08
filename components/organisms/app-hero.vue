<template lang="pug">
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

  .hero__text.pa.w-100.tc.ph3
    app-heading(size='1' :text='text' custom-class='white ts-1 mb2')
    app-paragraph(v-if='hasParagraph' size='4' :text='hero.fields.content' custom-class='white ts-1')

  .hero__arrow.pa.w-100.tc(v-if='hasArrow')
    a(href='#just-after-video' v-scroll-to="{ el: '#portfolio', duration: 500, easing: 'ease' }")
      svg(xmlns:xlink='http://www.w3.org/1999/xlink' preserveAspectRatio='xMidYMid' width='77' height='51' viewBox='0 0 77 51')
        g
          path(d='M63.19 14.062l-24.693 22.87-24.693-22.87' style='stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:4px;fill:none;fill-rule:evenodd')

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
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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


.hero__arrow {
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
}

.feature-text-anim 0% {
  opacity: 0;
  transform: translate3d(0, 10px, 0)
}

.feature-text-anim 75% {
  opacity: 0;
  transform: translate3d(0, 10px, 0)
}

.feature-text-anim 100% {
  opacity: 1;
  transform: translate3d(0, 0, 0)
}

@-webkit-keyframes feature-text-anim {
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

@keyframes feature-text-anim {
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

.feature-text-anim-alt 0% {
    opacity: 0;
    transform: translate3d(-50%, -45%, 0)
}

.feature-text-anim-alt 67% {
    opacity: 0;
    transform: translate3d(-50%, -45%, 0)
}

.feature-text-anim-alt 100% {
  opacity: 1;
  transform: translate3d(-50%, -50%, 0)
}

@-webkit-keyframes feature-text-anim-alt {
  0% {
    opacity: 0;
    transform: translate3d(-50%, -45%, 0)
  }
  67% {
    opacity: 0;
    transform: translate3d(-50%, -45%, 0)
  }
  100% {
    opacity: 1;
    transform: translate3d(-50%, -50%, 0)
  }
}

@keyframes feature-text-anim-alt {
  0% {
    opacity: 0;
    transform: translate3d(-50%, -45%, 0)
  }
  67% {
    opacity: 0;
    transform: translate3d(-50%, -45%, 0)
  }
  100% {
    opacity: 1;
    transform: translate3d(-50%, -50%, 0)
  }
}
</style>
