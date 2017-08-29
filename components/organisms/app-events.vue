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
            :destination='event.eventlink' 
            target="_blank"
            text='Click to Register'
          )

  .bg-lg-titanium
    .mw9.center.ph3.ph4-ns.pv5.pv6-ns
      app-heading.tc(size='2', text='Past Events' custom-class='white')

      .db.flex-ns.justify-center
        .w-100.w-50-m.w-third-l.ph4-ns.tc.mb4.mb0-ns(v-for='event in past_events')
          app-paragraph(size='6' :text='event.datetime' custom-class='white-70 mb4')
          img.db.ba.bw3.b--black-10.mb4(:src='event.image')
          app-heading(size='3' :text='event.name' custom-class='white')
          app-paragraph(size='6' :text='event.description' custom-class='white-70 lh-2')
          app-paragraph(size='5' :text='event.location' custom-class='white-70 lh-2 mb0')

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
        },
        {
          name: 'Cyber Security for Kids',
          description: '',
          datetime: '26 August 2017',
          location: 'Isobar, Level 4, 111 Cecil Street, South Melbourne',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_500,f_auto/v1502798530/youngcodersau_roebad.png',
          eventlink: 'https://www.eventbrite.com.au/e/cyber-security-for-kids-tickets-36513741584?ref=elink'
        }
      ],
      upcoming_events: [
        {
          name: 'Introduction to Virtual Reality (Advanced Class)',
          description: 'In this workshop you can expect your Young Coder to learn:<br>(i) what VR is, and what the consumer technology to access VR experiences are like,<br>(ii) creative and educational uses of VR to improve learning outcomes, knowledge and awareness,<br>(iii) the joy and wonders of experiencing the world in 3D, and the use of curiosity to drive learning and development.',
          datetime: 'Saturday, 9 Sept 2017. 12:00pm - 2:00pm',
          location: 'Cabrini Technology Group, 99/45 Gilby Road, Mount Waverley 3149',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_500,f_auto/v1504009773/o-VIRTUAL-REALITY-GAMES-facebook11-1920x500_slya54.jpg',
          eventlink: 'https://www.eventbrite.com.au/e/introduction-to-virtual-reality-advanced-class-tickets-37151724809'
        },
        {
          name: 'Introduction to Computing',
          description: 'Bring your Young Coders along on a magical adventure with Moana and her friends. They will use drag-and-drop visual blocks to write code that is part of a game. Visual programming is a fun and easily understood way to teach the logic of coding, and a great way to get "hooked" on the skills of today and tomorrow.',
          datetime: 'Saturday, 23 Sept 2017. 12:00pm - 2:00pm',
          location: 'Isobar, Level 4, 111 Cecil Street, South Melbourne',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_500,f_auto/v1504009768/738645_nopp0p.jpg',
          eventlink: 'https://www.eventbrite.com.au/e/introduction-to-computing-tickets-37151665632'
        },
        {
          name: 'Coding 101: Building a Static Website',
          description: 'This is going to be a basics of website development. Kids will be able to make their very first website step by step. If your kid has been to our previous workshops, its fine as this workshop is going to be very different than last one and they will learn more about HTML and making websites.',
          datetime: 'Saturday, 7 Oct 2017. 12:00pm - 2:00pm',
          location: 'Isobar, Level 4, 111 Cecil Street, South Melbourne',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_500,f_auto/v1502798530/youngcodersau_roebad.png',
          eventlink: 'https://www.eventbrite.com.au/e/coding-101-building-a-static-website-tickets-37413791658'
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
