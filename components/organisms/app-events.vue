<template lang="pug">
 .app-events
  .bg-white
    .mw9.center.ph3.ph4-ns.pv5.pv6-ns.tc
      .db.flex-ns.justify-center.flex-wrap

        .w-100.w-50-ns.ph4.mb5.tc
          app-heading(size='2', text='Upcoming Events')
          .db.flex-ns
            .w-100.ph4
              app-paragraph(size='4', text='Coding 102: Website with HTML & CSS' custom-class='black-50 mb0')
              app-paragraph(size='4', text='On 12 August 2017' custom-class='black-50 mb0')
              app-paragraph(size='4', text='Place: Isobar Australia, Level 4, 111 Cecil Street, South Melbourne' custom-class='black-50 mb4')
              app-paragraph(size='4', text='Time : 12:00 pm to 2:00 pm' custom-class='black-50 mb4') 
              app-button(secondary blank destination='https://www.eventbrite.com.au/e/coding-102-website-with-html-css-tickets-36465643722?ref=ebtn' text='Register here')

        .w-100.w-50-ns.ph4.tc
          app-heading(size='2', text='Past Events')
          .db.flex-ns
            .w-100.ph4
              app-paragraph(size='4', text='Coding 101 : Building a Static Website' custom-class='black-50 mb0')
              app-paragraph(size='4', text='On 22 July 2017' custom-class='black-50 mb0')
              app-paragraph(size='4', text='Place:  25 Glenferrie road Malvern' custom-class='black-50 mb4')
              app-paragraph(size='4', text='Time : 12:00 pm to 2:00 pm' custom-class='black-50 mb4') 
</template>

<script>
import appButton from '~/components/atoms/app-button'
import appHeading from '~/components/atoms/app-heading'
import appParagraph from '~/components/atoms/app-paragraph'

export default {
  name: 'app-events',
  components: {
    appButton,
    appHeading,
    appParagraph
  }
}
</script>

<style>

</style>
