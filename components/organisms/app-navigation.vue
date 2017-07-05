<template lang="pug">
nav.nav-expand
  .mw9.center.ph3.ph4-ns
    .flex.justify-between.items-center
      div
        nuxt-link.link.pa2.pointer.fw6.b.f5.f4-ns.dib.mr4(exact to='/' title='Home') Young Coders

      div.dn.db-ns
        nuxt-link.link.pa2.pointer.f6.f5-ns.dib.mr4(to='/about' title='About') About
        nuxt-link.link.pa2.pointer.f6.f5-ns.dib.mr4(to='/events' title='Events') Events
        nuxt-link.link.pa2.pointer.f6.f5-ns.dib.mr4(to='/blog' title='Blog') Blog
        nuxt-link.link.pa2.pointer.f6.f5-ns.dib(to='/contact' title='Contact') Contact

</template>

<script>
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
  }
}

</script>

<style>
.nav-expand {
  color: white;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

  .nav-expand a {
    color: white;
  }

.nav-shrink {
  background-color: #ffffff;
  border-bottom-style: solid;
  border-color: rgba( 0, 0, 0, .1 );
  border-width: .125rem;
  color: black;
  padding-top: .5rem;
  padding-bottom: .5rem;
}

  .nav-shrink a {
    color: black;
  }

nav {
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: background .5s ease-in-out, padding .5s ease-in-out;
  z-index: 1;
}

.link:hover {
  color: var(--app-blue-dark);
}
</style>
