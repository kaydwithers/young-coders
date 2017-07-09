<template lang="pug">
.navigation-links.tc.tc-m.tr-l.z-2(
  :class="{ 'is-active': $store.state.isMenuActive }"
)
  nuxt-link.link.pa2.pointer.f3.f5-l.db.db-m.dib-l.mr4-l.pv4.pv0-l(
    to='/about' 
    title='About us' 
    @click.native="$store.commit('toggleMenu')"
  ) About

  nuxt-link.link.pa2.pointer.f3.f5-l.db.db-m.dib-l.mr4-l.pv4.pv0-l(
    to='/events' 
    title='Events' 
    @click.native="$store.commit('toggleMenu')"
  ) Events

  nuxt-link.link.pa2.pointer.f3.f5-l.db.db-m.dib-l.mr4-l.pv4.pv0-l(
    to='/blog' 
    title='Blog' 
    @click.native="$store.commit('toggleMenu')"
  ) Blog

  nuxt-link.link.pv2.pl2.pointer.f3.f5-l.db.db-m.dib-l.pv4.pv0-l(
    to='/contact' 
    title='Contact' 
    @click.native="$store.commit('toggleMenu')"
  ) Contact

</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'app-navigation-links',

  methods: {
    ...mapMutations([
      'toggleMenu'
    ])
  }
}
</script>

<style lang="scss">
// .menu-overlay {
//   transition: opacity .5s;

//   @media screen and (max-width: 29em) {
//     background-color: white;
//     display: block;
//   }

//   @media screen and (min-width: 30em) {
//     display: none;
//   }
// }

// @media screen and (max-width: 29em) {
//   .navigation-links {
//     display: none;
//     left: 0;
//     position: absolute;
//     right: 0;
//     top: 150%;
//     width: 100%;
//   }

//   .navigation-links.is-active {
//     display: block;

//     a {
//       color: black;
//     }

//   }

//   .is-active-mobile {
//     opacity: 0;
//   }

// }
</style>
