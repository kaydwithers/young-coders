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
          name: 'Introduction to Virtual Reality (Advanced Class)',
          description: '',
          datetime: '9 September 2017',
          time: '12:00pm - 2:00pm',
          location: 'Cabrini Technology Group, 99/45 Gilby Road, Mt Waverley',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_500,f_auto/v1506826497/21752576_1811075475587175_985959334265212347_o_yus5cv.jpg',
          eventlink: 'https://www.eventbrite.com.au/e/introduction-to-virtual-reality-advanced-class-tickets-37151724809'
        },
        {
          name: 'Introduction to Computing',
          description: '',
          datetime: '23 September 2017',
          time: '12:00pm - 2:00pm',
          location: 'Isobar, Level 4, 111 Cecil Street, South Melbourne',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_500,f_auto/v1506825959/18_ng2h9d.jpg',
          eventlink: 'https://www.eventbrite.com.au/e/introduction-to-computing-tickets-37151665632'
        },
        {
          name: 'Coding 101: Building a Static Website',
          description: '',
          datetime: '7 October 2017',
          time: '12:00pm - 2:00pm',
          location: 'Isobar, Level 4, 111 Cecil Street, South Melbourne',
          image: 'http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,q_auto,w_500,f_auto/v1504320823/Young%20Coders/young-coders-rupert.jpg',
          eventlink: 'https://www.eventbrite.com.au/e/coding-101-building-a-static-website-tickets-37413791658'
        },
        {
          name: 'Introduction to Virtual Reality',
          description: 'Virtual Reality (VR) is a new way of experiencing the world, and will change the way people access and interact with their world - just like radio, TV and the internet did!<br>In this workshop you can expect your Young Coder to learn:<br>(i) what VR is, and what the consumer technology to access VR experiences are like,<br>(ii) creative and educational uses of VR to improve learning outcomes, knowledge and awareness,<br>(iii) the joy and wonders of experiencing the world in 3D, and the use of curiosity to drive learning and development.',
          date: 'Saturday, 18 Nov 2017',
          time: '12:00pm - 2:00pm',
          location: 'Isobar <br><a href="https://www.google.com.au/maps/place/Isobar+Australia/@-37.8307045,144.9575699,15z/data=!4m5!3m4!1s0x0:0x778de291fd77bf26!8m2!3d-37.8307045!4d144.9575699?sa=X&ved=0ahUKEwjP7pKTxIXWAhWLmJQKHf5mADEQ_BIIlQEwDg" target="_blank">Level 4, 111 Cecil Street, South Melbourne</a>',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_500,f_auto/v1504009773/o-VIRTUAL-REALITY-GAMES-facebook11-1920x500_slya54.jpg',
          eventlink: 'https://www.eventbrite.com.au/e/coding-101-building-a-static-website-tickets-37413791658'
        },
        {
          name: 'Full Day Coding Bootcamp',
          description: 'This bootcamp is going to be talked about for years to come...why? because your kids are going to have the TIME of their life. Participating kids get to collaborate in small teams to build a project that they\'re interested in. They are mentored and coached through the project selection and solution definition phases. Then they race off to build their prototypes and get to present their amazing creations to a panel of eager judges - demos and showing off welcome! :)',
          date: 'Saturday, 9 Dec 2017',
          time: '9:30am - 5:00pm',
          location: 'Isobar <br><a href="https://www.google.com.au/maps/place/Isobar+Australia/@-37.8307045,144.9575699,15z/data=!4m5!3m4!1s0x0:0x778de291fd77bf26!8m2!3d-37.8307045!4d144.9575699?sa=X&ved=0ahUKEwjP7pKTxIXWAhWLmJQKHf5mADEQ_BIIlQEwDg" target="_blank">Level 4, 111 Cecil Street, South Melbourne</a>',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_500,f_auto//v1510438562/coding_bootcamp_kmpg2n.jpg',
          eventlink: 'https://www.eventbrite.com.au/e/coding-bootcamp-tickets-39716129011'
        }
      ],
      upcomingEvents: [
        {
          name: 'BUILDING YOUR OWN WEBSITE',
          description: 'This is going to be a basics of website development. Kids will be able to make their very first website step by step. If your kid has been to our previous workshops, its fine as this workshop is going to be very different than last one and they will learn more about HTML and making websites.',
          date: 'Saturday, 5 May 2018',
          time: '12pm - 2:00pm',
          location: 'General Assembly, Level 12a, 45 William St, Melbourne, VIC 3000, Australia',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_500,f_auto/v1502802409/young_coders_coding_1011_rqxi3y.jpg',
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
