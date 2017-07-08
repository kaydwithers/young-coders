<template lang="pug">
.bg-white
  .mw9.center.ph3.ph4-ns.pv5.pv6-ns.tc
    app-heading(size='2', text='Upcoming Events')
    .db.flex-ns
      .w-100.ph4
        app-paragraph(size='4', text='Coding 101 : Building a Static Website' custom-class='black-50 mb0')
        app-paragraph(size='4', text='On 22 July 2017' custom-class='black-50 mb0')
        app-paragraph(size='4', text='@ 25 Glenferrie road Malvern' custom-class='black-50 mb4')
        app-paragraph(size='6', text='https://goo.gl/forms/6x7aJXGiZxzuP8Sm1' custom-class='mb0')
 
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
