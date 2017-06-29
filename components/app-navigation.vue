<template lang="pug">
nav.flex.justify-between.pa3.pa4-ns.ttu.bg-white.bb.bw1.b--black-10
  div
    nuxt-link.link.pointer.dim.black.b.f5.f4-ns.dib.mr4(exact to='/' title='Home') Young Coders

  div
    nuxt-link.link.pointer.dim.gray.f7.f6-ns.dib.mr4(to='/about' title='About') About
    nuxt-link.link.pointer.dim.gray.f7.f6-ns.dib.mr4(to='/events' title='Events') Events
    nuxt-link.link.pointer.dim.gray.f7.f6-ns.dib.mr4(to='/blog' title='Blog') Blog
    nuxt-link.link.pointer.dim.gray.f7.f6-ns.dib(to='/contact' title='Contact') Contact
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
</style>
