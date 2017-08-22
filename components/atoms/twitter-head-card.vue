<template>
  <span v-if="false"></span>
</template>

<script>
// Test on: https://cards-dev.twitter.com/validator
export default {
  data: () => ({
    href: 'https://twitter.com/intent/tweet?url=' + encodeURIComponent('https://head-elements.now.sh/about')
  }),
  head: {
    meta: [
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: 'youngcodersau.com' },
      { name: 'twitter:title', content: 'Young Coders ʕ•ᴥ•ʔ' },
      { name: 'twitter:description', content: 'Coding workshops for kids and all ages' },
      { name: 'twitter:image', content: 'https://res.cloudinary.com/dvjpaoffl/image/upload/v1503228580/young-coders-share.jpg' },
      { name: 'twitter:image:alt', content: 'Young Coders logo' }
    ]
  }
}
</script>
