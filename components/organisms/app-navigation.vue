<template lang="pug">
nav.app-navigation.nav-expand
  .ph3.ph4-m.ph5-l
    .flex.justify-between.items-center
      .ff-code.z-1(
        :class="{ 'is-mobile-active': $store.state.isMenuActive }"
      )
        nuxt-link.logo.link.nc-active.pv2.pointer.fw6.b.f5.f4-ns.dib.mr4(
          exact to='/' 
          title='Home'
        ) Young Coders ʕ•ᴥ•ʔ

      .navigation-links
        .tc.tc-m.tr-l.z-2(
          :class="{ 'is-mobile-active': $store.state.isMenuActive }"
        )
          nuxt-link.link.pa2.pointer.f3.f5-l.mr4-l.pv4.pv0-l(
            @click.native="$store.commit('toggleMenu')"
            to='/about' 
            title='About us' 
          ) About

          nuxt-link.link.pa2.pointer.f3.f5-l.mr4-l.pv4.pv0-l(
            @click.native="$store.commit('toggleMenu')"
            to='/events' 
            title='Events' 
          ) Events

          nuxt-link.link.pa2.pointer.f3.f5-l.mr4-l.pv4.pv0-l(
            @click.native="$store.commit('toggleMenu')"
            to='/blog' 
            title='Blog' 
          ) Blog

          nuxt-link.link.pv2.pl2.pointer.f3.f5-l.pv4.pv0-l(
            @click.native="$store.commit('toggleMenu')"
            to='/contact' 
            title='Contact' 
          ) Contact

      .db.dn-l
        app-hamburger

</template>

<script>
import { mapMutations } from 'vuex'

import appHamburger from '~/components/atoms/app-hamburger'
import appNavigationLinks from '~/components/molecules/app-navigation-links'

export default {
  name: 'app-navigation',

  methods: {
    ...mapMutations([
      'toggleMenu'
    ])
  },

  mounted () {
    const nav = document.querySelector('nav')
    const topOfNav = nav.offsetTop

    function fixNav () {
      if (window.scrollY === topOfNav) {
        nav.classList.add('nav-expand')
        nav.classList.remove('nav-shrink')
      } else {
        nav.classList.add('nav-shrink')
        nav.classList.remove('nav-expand')
      }
    }
    window.addEventListener('scroll', fixNav)
  },

  components: {
    appHamburger,
    appNavigationLinks
  }

}
</script>

<style lang="scss">
nav {
  animation: var(--animation-fade-up);
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: background .5s ease-in-out, padding .5s ease-in-out;
  z-index: 1;
}

.nav-expand {
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media screen and (min-width: 48em) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  a,
  .nc-active { // No color active
    color: white;
  }

  .bar {
    background-color: #fff;
  }

}

.nav-shrink {
  background-color: #ffffff;
  border-bottom-style: solid;
  border-color: rgba( 0, 0, 0, .05 );
  border-width: .125rem;
  padding-top: .5rem;
  padding-bottom: .5rem;

  a,
  .nc-active { // No color active
    color: black;
  }

  .bar {
    background-color: black;
  }

}

a:hover,
a.nuxt-link-active,
a.nc-active:hover {
  color: var(--app-blue-dark);
}

.navigation-links {
  z-index: 0;

  a {
    display: none;

    @media screen and (min-width: 60em) {
      display: inline-block;
    }
  }

  @media screen and (max-width: 59em) {
    .is-mobile-active {
      background-color: rgba(255, 255, 255, 0.95);
      left: 0;
      padding: 8rem 0 5rem;
      position: absolute;
      top: 0;
      width: 100%;

      a {
        color: black;
        display: block;
      }

    }
  }

}

.is-mobile-active {

  @media screen and (max-width: 59em) {
    .logo {
      color: black;
    }

    .bar {
      background-color: black;
    }
  }

}

</style>
