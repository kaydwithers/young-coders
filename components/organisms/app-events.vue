<template lang="pug">
.app-events

  .bg-white
    .mw9.center.ph3.ph4-ns.pv5.pv6-ns
      app-heading.tc(size='2' text='Upcoming Events')

      .db.flex-ns.flex-wrap-ns.justify-center
        .db.flex-ns.flex-column.w-100.w-50-m.w-third-l.ph4-ns(v-for='event in upcomingEvents')
          img.db.ba.bw1.b--black-10.mb4(:src='event.image')
          app-heading(size='3' :text='event.name')
          .p5.mb0(v-html='"<strong>Date:</strong> " + event.date')
          .p5.mb0(v-html='"<strong>Time:</strong> " + event.time')
          .p5.mb4(v-html='"<strong>Location:</strong> " + event.location')
          .p5.mb4(v-html='event.description')
          .mt-auto
            app-button(
              primary 
              :destination='event.eventlink' 
              target='_blank'
              text='Click to Register'
            )

  .bg-lg-titanium
    .mw9.center.ph3.ph4-ns.pv5.pv6-ns
      app-heading.tc(size='2' text='Past Events' custom-class='white')

      .db.flex-ns.justify-center
        .w-100.w-50-m.w-third-l.ph4-ns.tc.mb4.mb0-ns(v-for='event in pastEvents')
          .p6.white(v-html='event.datetime')
          img.db.ba.bw3.b--black-10.mb4(:src='event.image')
          app-heading.white(size='3' :text='event.name')
          .p6.white(v-html='event.description')
          .p5.mb0.white(v-html='event.location')

</template>

<script>
import appButton from '~/components/atoms/app-button'
import appHeading from '~/components/atoms/app-heading'

export default {
  name: 'app-events',

  data () {
    return {
      pastEvents: [
        {
          name: 'Softwares : Code+Draw+Write',
          description: '',
          datetime: '14 April 2018',
          location: 'General Assembly, Level 12a, 45 William St, Melbourne, VIC 3000, Australia',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_500,f_auto/v1506825959/18_ng2h9d.jpgs',
          eventlink: 'https://www.eventbrite.com.au/e/softwares-codedrawwrite-tickets-43502337663'
        },
        {
          name: 'Easter Egg Hunt using Chatbots',
          description: '',
          datetime: '24 March 2018',
          location: 'General Assembly, Level 12a, 45 William St, Melbourne, VIC 3000, Australia',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_500,f_auto/v1506825959/18_ng2h9d.jpg',
          eventlink: 'https://www.eventbrite.com.au/e/easter-egg-hunt-introduction-to-chatbots-ai-tickets-43502252408'
        },
        {
          name: 'Easter Egg Hunt using Chatbots',
          description: '',
          datetime: '17 March 2018',
          location: 'General Assembly, Level 12a, 45 William St, Melbourne, VIC 3000, Australia',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_500,f_auto/v1506825959/18_ng2h9d.jpg',
          eventlink: 'https://www.eventbrite.com.au/e/easter-egg-hunt-introduction-to-chatbots-ai-tickets-43502221315'
        }
      ],
      upcomingEvents: [
        {
          name: 'BUILDING YOUR OWN WEBSITE',
          description: 'This is going to be a basics of website development. Kids will be able to make their very first website step by step. If your kid has been to our previous workshops, its fine as this workshop is going to be very different than last one and they will learn more about HTML and making websites.',
          date: 'Saturday, 5 May 2018',
          time: '12pm - 2:00pm',
          location: 'General Assembly, Level 12a, 45 William St, Melbourne, VIC 3000, Australia',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/v1510438562/coding_bootcamp_kmpg2n.jpg',
          eventlink: 'https://www.eventbrite.com.au/e/building-your-own-website-tickets-45294374694'
        }
      ]
    }
  },

  components: {
    appButton,
    appHeading
  }
}
</script>

<style>

</style>
