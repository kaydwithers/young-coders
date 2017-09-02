<template lang="pug">
article.article-preview
  .ph4-ns.tc
    img.w-100.mb4.mt3.ba.bw3.b--white-20(
      :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
      :srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=196&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=562&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=1125&fit=fill 2000w`"
      sizes="(min-width: 1024px) 400px, 100vw"
    )

    .p6.white-70(v-text='( new Date(post.fields.publishDate)).toDateString()')

    h3
      nuxt-link.db.f3.lh-copy.fw6.mb4.link.white(
        :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}"
      ) {{ post.fields.title }}

    .p5.white.mb4(v-text='post.fields.description')

    nuxt-link(
      v-for='tag in post.fields.tags'
      :key='tag'
      :to="{ name: 'tags-tag', params: { tag: tag }}") {{ tag }}
</template>

<script>
import appHeading from '~/components/atoms/app-heading'

export default {
  props: ['post'],
  components: {
    appHeading
  }
}
</script>

<style>

</style>
