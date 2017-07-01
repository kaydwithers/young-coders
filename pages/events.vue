<template lang="pug">
.bg-white
  .w-100.pv6.f6.ph3.ph4-ns
    .mw7.center.ph3-ns
      app-heading(size='1' :text='page.fields.heading')
      app-paragraph(size='1' :text='page.fields.content')
</template>

<script>
import { cdaClient } from '~/plugins/contentful-client.js'
import appHeading from '~/components/app-heading'
import appParagraph from '~/components/app-paragraph'

export default {
  name: 'about',
  asyncData ({ params }) {
    return Promise.all([
      cdaClient.getEntries({
        'content_type': process.env.CTF_PAGE_ID
      })
    ]).then(([page]) => {
      return {
        page: page.items[1]
      }
    }).catch(console.error)
  },
  components: {
    appHeading,
    appParagraph
  }
}
</script>

<style>

</style>
