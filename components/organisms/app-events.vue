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
        },
        {
          name: 'Cyber Security for Kids',
          description: '',
          datetime: '26 August 2017',
          location: 'Isobar, Level 4, 111 Cecil Street, South Melbourne',
          image: 'http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,q_auto,w_500,f_auto/v1504320823/Young%20Coders/young-coders-event-01.jpg',
          eventlink: 'https://www.eventbrite.com.au/e/cyber-security-for-kids-tickets-36513741584?ref=elink'
        }
      ],
      upcomingEvents: [
        {
          name: 'Introduction to Virtual Reality (Advanced Class)',
          description: 'In this workshop you can expect your Young Coder to learn:<br><ul class="pl4"><li>What VR is, and what the consumer technology to access VR experiences are like, </li><li>Creative and educational uses of VR to improve learning outcomes, knowledge and awareness, </li><li>The joy and wonders of experiencing the world in 3D, and the use of curiosity to drive learning and development.</li></ul>',
          date: 'Saturday, 9 Sept 2017',
          time: '12:00pm - 2:00pm',
          location: 'Cabrini Technology Group <br><a href="https://www.google.com.au/maps/place/Cabrini+Technology+Group/@-37.8976723,145.1350174,15z/data=!4m5!3m4!1s0x0:0xae8a0836a1717ea8!8m2!3d-37.8976723!4d145.1350174" target="_blank">99/45 Gilby Road, Mt Waverley</a>',
          image: 'http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,q_auto,w_500,f_auto/v1504320823/Young%20Coders/young-coders-events-vr.jpg',
          eventlink: 'https://www.eventbrite.com.au/e/introduction-to-virtual-reality-advanced-class-tickets-37151724809'
        },
        {
          name: 'Introduction to Computing',
          description: 'Bring your Young Coders along on a magical adventure with Moana and her friends. They will use drag-and-drop visual blocks to write code that is part of a game. Visual programming is a fun and easily understood way to teach the logic of coding, and a great way to get "hooked" on the skills of today and tomorrow.',
          date: 'Saturday, 23 Sept 2017',
          time: '12:00pm - 2:00pm',
          location: 'Isobar <br><a href="https://www.google.com.au/maps/place/Isobar+Australia/@-37.8307045,144.9575699,15z/data=!4m5!3m4!1s0x0:0x778de291fd77bf26!8m2!3d-37.8307045!4d144.9575699?sa=X&ved=0ahUKEwjP7pKTxIXWAhWLmJQKHf5mADEQ_BIIlQEwDg" target="_blank">Level 4, 111 Cecil Street, South Melbourne</a>',
          image: 'http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,q_auto,w_500,f_auto/v1504320823/Young%20Coders/young-coders-moana.jpg',
          eventlink: 'https://www.eventbrite.com.au/e/introduction-to-computing-tickets-37151665632'
        },
        {
          name: 'Coding 101: Building a Static Website',
          description: 'This is going to be a basics of website development. Kids will be able to make their very first website step by step. If your kid has been to our previous workshops, its fine as this workshop is going to be very different than last one and they will learn more about HTML and making websites.',
          date: 'Saturday, 7 Oct 2017',
          time: '12:00pm - 2:00pm',
          location: 'Isobar <br><a href="https://www.google.com.au/maps/place/Isobar+Australia/@-37.8307045,144.9575699,15z/data=!4m5!3m4!1s0x0:0x778de291fd77bf26!8m2!3d-37.8307045!4d144.9575699?sa=X&ved=0ahUKEwjP7pKTxIXWAhWLmJQKHf5mADEQ_BIIlQEwDg" target="_blank">Level 4, 111 Cecil Street, South Melbourne</a>',
          image: 'http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,q_auto,w_500,f_auto/v1504320823/Young%20Coders/young-coders-rupert.jpg',
          eventlink: 'https://www.eventbrite.com.au/e/coding-101-building-a-static-website-tickets-37413791658'
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
