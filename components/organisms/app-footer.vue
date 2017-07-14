<template lang="pug">
footer
  .bg-black-80
    .pv4.pv6-ns.tc
      p.f6.f5-ns.white-50.mb0 © Young Coders ʕ•ᴥ•ʔ
      .footer-social 
      br
      a(href='https://www.facebook.com/Young-Coders-1739074226120634/')
          img(height='42', src='http://res.cloudinary.com/dvkozhom2/image/upload/v1500038971/facebook_zyscrh.png')
      a(href='https://twitter.com/YoungCodersAU')
          img(height='42', src='http://res.cloudinary.com/dvkozhom2/image/upload/v1500038971/twitter_fwgmze.png')
      a(href='https://www.instagram.com/youngcodersau/')
          img(height='42', src='http://res.cloudinary.com/dvkozhom2/image/upload/v1500038971/instagram_dpv3fm.png')
</template>

<script>
import appParagraph from '~/components/atoms/app-paragraph'

export default {
  name: 'app-footer',
  components: {
    appParagraph
  }
}
</script>

<style>

</style>
