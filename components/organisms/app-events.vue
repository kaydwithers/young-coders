<template lang="pug">
.bg-white
  .mw9.center.ph3.ph4-ns.pv5.pv6-ns
    .tc
    app-heading(size='2', text='Upcoming Events')
    .db.flex-ns
      .w-100.w-25-ns.ph4.tc
        app-paragraph(size='5', text='Coding 101 : Building a Static Website')
        app-paragraph(size='5', text='On 22 July 2017')
        app-paragraph(size='5', text='@ 25 Glenferrie road Malvern')
        app-paragraph(size='6', text='https://goo.gl/forms/6x7aJXGiZxzuP8Sm1')
 
</template>

<script>
import appHeading from '~/components/atoms/app-heading'
import appParagraph from '~/components/atoms/app-paragraph'

export default {
  name: 'app-footer',
  components: {
    appHeading,
    appParagraph
  }
}
</script>

<style>

</style>
