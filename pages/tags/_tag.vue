<template lang="pug">
.tag
  header
    img(
      :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
      :srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=87&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=250&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=500&fit=fill 2000w`"
      size="100vw"
      :alt="post.fields.heroImage.fields.description"
    )

  .bg-white
    .mw9.center.ph3.ph4-ns.pv6
      .w-100

        app-heading(size='2' :text="'#' + tag")

        .p4.black-50.mb0(
          v-text="'All articles tagged ' + '#' + tag + ' (' + posts.length + ')'"
        )

  .bg-lg-blue-light
    .mw9.center.ph3.ph4-ns.pv6
      .w-100

        .db.flex-ns.justify-center
          .w-100.w-50-m.w-third-l(v-for='post in posts')
            article-preview(:post="post")

</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import Navigation from '~/components/navigation.vue'
import ArticlePreview from '~/components/article-preview.vue'
import appHeading from '~/components/atoms/app-heading'
import appHero from '~/components/organisms/app-hero'
import appParagraph from '~/components/atoms/app-paragraph'

const client = createClient()

export default {
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'fields.tags[in]': params.tag,
      'fields.slug': params.slug,
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        post: entries.items[0],
        posts: entries.items,
        tag: params.tag
      }
    })
  },
  components: {
    appParagraph,
    appHeading,
    appHero,
    ArticlePreview,
    Navigation
  }
}
</script>

<style>
</style>
