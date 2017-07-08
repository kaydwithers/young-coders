<template lang="pug">
nav.nav-expand
  .ph3.ph4-m.ph5-l
    .flex.justify-between.items-center
      .ff-code
        nuxt-link.link.nc-active.pv2.pointer.fw6.b.f5.f4-ns.dib.mr4(
          exact to='/' 
          title='Home'
        ) Young Coders ʕ•ᴥ•ʔ

      app-navigation-links

      .db.dn-l
        app-hamburger

</template>

<script>
import appHamburger from '~/components/atoms/app-hamburger'
import appNavigationLinks from '~/components/molecules/app-navigation-links'

export default {
  name: 'app-navigation',

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
  a.nc-active {
    color: white;
  }

  .bar {
    background-color: #fff;
  }

  .is-active .bar {
    background-color: black !important;
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
  a.nc-active {
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
</style>
