<template lang="pug">
div
  nav.bg-white.bb.bw1.b--black-10
    .mw9.center.ph3.ph4-ns.pv4
      .flex.justify-between.items-center.fw6
        div
          nuxt-link.link.pa2.pointer.black.b.f5.f4-ns.dib.mr4(exact to='/' title='Home') Young Coders

        div.dn.db-ns
          nuxt-link.link.pa2.pointer.gray.f7.f6-ns.dib.mr4(to='/about' title='About') About
          nuxt-link.link.pa2.pointer.gray.f7.f6-ns.dib.mr4(to='/events' title='Events') Events
          nuxt-link.link.pa2.pointer.gray.f7.f6-ns.dib.mr4(to='/blog' title='Blog') Blog
          nuxt-link.link.pa2.pointer.gray.f7.f6-ns.dib(to='/contact' title='Contact') Contact

</template>

<script>
export default {

}
</script>

<style>
nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
}

.link:hover {
  color: var(--blue);
}
</style>
