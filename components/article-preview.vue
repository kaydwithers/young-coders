<template lang="pug">
article.ph4
  img.w-100.mb4.mt3(
    :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
    :srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=196&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=562&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=1125&fit=fill 2000w`"
    sizes="(min-width: 1024px) 400px, 100vw"
  )

  app-paragraph(size='6' :text='( new Date(post.fields.publishDate)).toDateString()')

  nuxt-link.db.f3.fw6.mb4.link.black-70(
    :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}"
  ) {{ post.fields.title }}

  app-paragraph(size='4' :text='post.fields.description')

  nuxt-link(
    v-for='tag in post.fields.tags'
    :key='tag'
    :to="{ name: 'tags-tag', params: { tag: tag }}") {{ tag }}
</template>

<script>
import appHeading from '~/components/atoms/app-heading'
import appParagraph from '~/components/atoms/app-paragraph'

export default {
  props: ['post'],
  components: {
    appHeading,
    appParagraph
  }
}
</script>

<style>

</style>
