<template lang="pug">
.header
  .w-100.pv6.f6.ph3.ph4-ns
    .mw7.center.ph3-ns
      app-heading(size='1' text='Blog')
      app-paragraph(size='1' :text="'All articles' + ' (' + posts.length + ')'")

    section
      ul.flex
        li.w-100(v-for='post in posts')
          article-preview(:post="post")
</template>

<script>
import { cdaClient } from '../../plugins/contentful-client.js'
import ArticlePreview from '~components/article-preview.vue'
import appHeading from '~/components/app-heading'
import appParagraph from '~/components/app-paragraph'

export default {
  asyncData ({ params }) {
    return cdaClient.getEntries({
      'content_type': process.env.CTF_BLOG_POST_TYPE_ID,
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        posts: entries.items
      }
    })
  },
  components: {
    ArticlePreview,
    appHeading,
    appParagraph
  }
}
</script>

<style>

</style>
