<template lang="pug">
.hero.pr.bg-black(:class="{ 'hero--small': heroSmall }")

  .hero__overlay.pa

  img(
    :src="hero.fields.heroImage.fields.file.url + '?fit=scale&w=350'"
    :srcset="`${hero.fields.heroImage.fields.file.url}?w=350 350w, ${hero.fields.heroImage.fields.file.url}?w=1000 1000w, ${hero.fields.heroImage.fields.file.url}?w=2000 2000w`"
    sizes="100vw"
  )

  .hero__text.pa.tc.ph3
    app-heading(size='1' :text='text' custom-class='white ts-1 mb2')
    app-paragraph(v-if='hasParagraph' size='4' :text='hero.fields.content' custom-class='white ts-1')

  .hero__arrow.pa.tc(v-if='hasArrow')
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
    hasArrow: { default: false }
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
  width: 100%;
}

.hero__overlay {
  background-color: rgba(0, 0, 0, .2);
  height: 100%;
  width: 100%;
}

.hero {
  height: 80vh;
}

  .hero--small {
    height: 60vh;
  }

  .hero img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }


.hero__arrow {
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
  width: 100%;
}

.feature-text-anim 0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 10px, 0);
    -moz-transform: translate3d(0, 10px, 0);
    -ms-transform: translate3d(0, 10px, 0);
    -o-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0)
}

.feature-text-anim 75% {
    opacity: 0;
    -webkit-transform: translate3d(0, 10px, 0);
    -moz-transform: translate3d(0, 10px, 0);
    -ms-transform: translate3d(0, 10px, 0);
    -o-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0)
}

.feature-text-anim 100% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
}

@-webkit-keyframes feature-text-anim {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 10px, 0);
        -moz-transform: translate3d(0, 10px, 0);
        -ms-transform: translate3d(0, 10px, 0);
        -o-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0)
    }
    75% {
        opacity: 0;
        -webkit-transform: translate3d(0, 10px, 0);
        -moz-transform: translate3d(0, 10px, 0);
        -ms-transform: translate3d(0, 10px, 0);
        -o-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0)
    }
    100% {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
        -o-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
}

@keyframes feature-text-anim {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 10px, 0);
        -moz-transform: translate3d(0, 10px, 0);
        -ms-transform: translate3d(0, 10px, 0);
        -o-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0)
    }
    75% {
        opacity: 0;
        -webkit-transform: translate3d(0, 10px, 0);
        -moz-transform: translate3d(0, 10px, 0);
        -ms-transform: translate3d(0, 10px, 0);
        -o-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0)
    }
    100% {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
        -o-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
}

.feature-text-anim-alt 0% {
    opacity: 0;
    -webkit-transform: translate3d(-50%, -45%, 0);
    -moz-transform: translate3d(-50%, -45%, 0);
    -ms-transform: translate3d(-50%, -45%, 0);
    -o-transform: translate3d(-50%, -45%, 0);
    transform: translate3d(-50%, -45%, 0)
}

.feature-text-anim-alt 67% {
    opacity: 0;
    -webkit-transform: translate3d(-50%, -45%, 0);
    -moz-transform: translate3d(-50%, -45%, 0);
    -ms-transform: translate3d(-50%, -45%, 0);
    -o-transform: translate3d(-50%, -45%, 0);
    transform: translate3d(-50%, -45%, 0)
}

.feature-text-anim-alt 100% {
    opacity: 1;
    -webkit-transform: translate3d(-50%, -50%, 0);
    -moz-transform: translate3d(-50%, -50%, 0);
    -ms-transform: translate3d(-50%, -50%, 0);
    -o-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0)
}

@-webkit-keyframes feature-text-anim-alt {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-50%, -45%, 0);
        -moz-transform: translate3d(-50%, -45%, 0);
        -ms-transform: translate3d(-50%, -45%, 0);
        -o-transform: translate3d(-50%, -45%, 0);
        transform: translate3d(-50%, -45%, 0)
    }
    67% {
        opacity: 0;
        -webkit-transform: translate3d(-50%, -45%, 0);
        -moz-transform: translate3d(-50%, -45%, 0);
        -ms-transform: translate3d(-50%, -45%, 0);
        -o-transform: translate3d(-50%, -45%, 0);
        transform: translate3d(-50%, -45%, 0)
    }
    100% {
        opacity: 1;
        -webkit-transform: translate3d(-50%, -50%, 0);
        -moz-transform: translate3d(-50%, -50%, 0);
        -ms-transform: translate3d(-50%, -50%, 0);
        -o-transform: translate3d(-50%, -50%, 0);
        transform: translate3d(-50%, -50%, 0)
    }
}

@keyframes feature-text-anim-alt {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-50%, -45%, 0);
        -moz-transform: translate3d(-50%, -45%, 0);
        -ms-transform: translate3d(-50%, -45%, 0);
        -o-transform: translate3d(-50%, -45%, 0);
        transform: translate3d(-50%, -45%, 0)
    }
    67% {
        opacity: 0;
        -webkit-transform: translate3d(-50%, -45%, 0);
        -moz-transform: translate3d(-50%, -45%, 0);
        -ms-transform: translate3d(-50%, -45%, 0);
        -o-transform: translate3d(-50%, -45%, 0);
        transform: translate3d(-50%, -45%, 0)
    }
    100% {
        opacity: 1;
        -webkit-transform: translate3d(-50%, -50%, 0);
        -moz-transform: translate3d(-50%, -50%, 0);
        -ms-transform: translate3d(-50%, -50%, 0);
        -o-transform: translate3d(-50%, -50%, 0);
        transform: translate3d(-50%, -50%, 0)
    }
}


</style>
