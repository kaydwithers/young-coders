<template lang="pug">
.bg-white
  .mw9.center.ph3.ph5-ns.pv6
    .w-100
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
import appHeading from '~/components/atoms/app-heading'
import appParagraph from '~/components/atoms/app-paragraph'

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
