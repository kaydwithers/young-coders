<template lang="pug">
.bg-white
  .mw9.center.ph3.ph4-ns.pv5.pv6-ns.tc
   .db.flex-ns.justify-center.flex-wrap
    .w-100.w-25-ns.ph4.mb4.tc
      app-heading(size='2', text='Upcoming Events')
      .db.flex-ns
        .w-100.ph4
          app-paragraph(size='4', text='Please watch this space for Upcoming Events or Email us at hello@youngcodersau.com' custom-class='black-50 mb0') 
    .w-100.w-25-ns.ph4.mb4.tc
      app-heading(size='2', text='Past Events')
      .db.flex-ns
        .w-100.ph4
          app-paragraph(size='4', text='Coding 101 : Building a Static Website' custom-class='black-50 mb0')
          app-paragraph(size='4', text='On 22 July 2017' custom-class='black-50 mb0')
          app-paragraph(size='4', text='Place:  25 Glenferrie road Malvern' custom-class='black-50 mb4')
          app-paragraph(size='4', text='Time : 12 pm to 2:00 pm' custom-class='black-50 mb4') 
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
