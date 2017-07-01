<template>
  <article class="ph4">
    <img class="w-100  mb4  mt3"
      :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
      :srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=196&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=562&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=1125&fit=fill 2000w`"
      sizes="(min-width: 1024px) 400px, 100vw"
    >
    <p class="f6  mb4">{{ ( new Date(post.fields.publishDate)).toDateString() }}</p>
    <h4 class="f4  mb4"><nuxt-link :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}" class="title">{{ post.fields.title }}</nuxt-link></h4>
    <p class="f5  mb3  lh-copy">{{ post.fields.description }}</p>

    <div class="">
      <nuxt-link
        v-for="tag in post.fields.tags"
        :key="tag"
        :to="{ name: 'tags-tag', params: { tag: tag }}" class="tag">{{ tag }}</nuxt-link>
    </div>
  </article>
</template>

<script>
export default {
  props: ['post'],
  components: {}
}
</script>

<style>

.thumbnail {
  margin-bottom: 1em;
}

.date {
}

.title {
  text-decoration: none;
  font-size: 22px;
  color: #373F49;
}

.tags {
  padding : 1em 0;
  margin-bottom: 2em;
}

.tag:link,
.tag:visited {
  color: #A0A0A0;
  text-decoration: none;
  display: inline-block;
  padding: .33333rem .5rem;
  line-height: 1;
  border-radius: 2px;
  border: 1px solid #A0A0A0;
  margin-right: .5em;
}

.tag:active,
.tag:hover,
.tag:focus {
  color: #606060;
  border-color: #606060;
}

</style>
