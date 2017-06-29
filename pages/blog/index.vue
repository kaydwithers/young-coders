<template>
  <div>
    <!-- Blog header -->
    <header class="blog header">
      <div class="foreground">
        <div class="page-bar wrapper">
          <a href="/" class="person-name">John Doe</a>
        </div>
        <div class="page-info wrapper">
          <h2>Blog</h2>
        </div>
      </div>
    </header>

    <section class="">
      <div class="">
        <h2>All articles ({{ posts.length }})</h2>
      </div>
      <ul class="flex">
        <li class="w-100" v-for="post in posts">
          <article-preview :post="post" />
        </li>
      </ul>
    </section>

  </div>
</template>

<script>
import { cdaClient } from '../../plugins/contentful-client.js'
import ArticlePreview from '~components/article-preview.vue'

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
    ArticlePreview
  }
}
</script>

<style>

</style>
