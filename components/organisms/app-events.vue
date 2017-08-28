<template lang="pug">
.app-events

  .bg-white
    .mw9.center.ph3.ph4-ns.pv5.pv6-ns
      app-heading.tc(size='2', text='Upcoming Events')

      .db.flex-ns.justify-center
        .w-100.w-50-m.w-third-l.ph4-ns.tc(v-for='event in upcoming_events')
          app-paragraph(size='6' :text='event.datetime')
          img.db.ba.bw1.b--black-10.mb4(:src='event.image')
          app-heading(size='3' :text='event.name')
          app-paragraph(size='6' :text='event.location')
          app-paragraph(size='5' :text='event.description') 
          app-button(
            primary 
            destination='https://www.eventbrite.com.au/e/cyber-security-for-kids-tickets-36513741584?ref=elink' 
            target="_blank"
            text='Click to Register'
          )

  .bg-lg-titanium
    .mw9.center.ph3.ph4-ns.pv5.pv6-ns
      app-heading.tc(size='2', text='Past Events' custom-class='white')

      .db.flex-ns.justify-center
        .w-100.w-50-m.w-third-l.ph4-ns.tc.mb4.mb0-ns(v-for='event in past_events')
          app-paragraph(size='6' :text='event.datetime' custom-class='white mb4')
          img.db.ba.bw3.b--black-10.mb4(:src='event.image')
          app-heading(size='3' :text='event.name' custom-class='white')
          app-paragraph(size='6' :text='event.description' custom-class='white lh-2')
          app-paragraph(size='5' :text='event.location' custom-class='white lh-2 mb0')

</template>

<script>
import appButton from '~/components/atoms/app-button'
import appHeading from '~/components/atoms/app-heading'
import appParagraph from '~/components/atoms/app-paragraph'

export default {
  name: 'app-events',

  data () {
    return {
      past_events: [
        {
          name: 'Coding 102: Website with HTML & CSS',
          description: '',
          datetime: '12 August 2017',
          location: 'Isobar, Level 4, 111 Cecil Street, South Melbourne',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_500,f_auto/v1502802378/young_coders_coding_102_11_vthtss.jpg',
          eventlink: 'https://www.eventbrite.com.au/e/cyber-security-for-kids-tickets-36513741584?ref=elink'
        },
        {
          name: 'Coding 101: Building a Static Website',
          description: '',
          datetime: '22 July 2017',
          location: '25 Glenferrie road, Malvern',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_500,f_auto/v1502802409/young_coders_coding_1011_rqxi3y.jpg',
          eventlink: 'https://www.eventbrite.com.au/e/cyber-security-for-kids-tickets-36513741584?ref=elink'
        }
      ],
      upcoming_events: [
        {
          name: 'Cyber Security for Kids',
          description: 'In this workshop we will educate attendees about the good (Education, games, movies, images) and bad (Viruses, scams, online privacy) aspects of the internet and how to stay safe online.',
          datetime: 'Saturday, 26 August 2017. 12:00 - 2:00pm',
          location: 'Isobar, Level 4, 111 Cecil Street, South Melbourne',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_500,f_auto/v1502798530/youngcodersau_roebad.png',
          eventlink: 'https://www.eventbrite.com.au/e/cyber-security-for-kids-tickets-36513741584?ref=elink'
        }
      ]
    }
  },

  components: {
    appButton,
    appHeading,
    appParagraph
  }
}
</script>

<style>

</style>
