<template lang="pug">
.app-supporters
  .bc-white
    .mw9.center.ph3.ph4-ns.pv5.pv6-ns.tc
      app-heading(size='2' text='Testimonials')

      app-paragraph.tc.i(size='3' text='&lsquo;Many experienced adult coders more than willing to help the kids....thank you!&rsquo;' custom-class='mb-0 black-50 mb4')
      app-paragraph.tc.i(size='3' text='&lsquo;Making the website and solving mazes were my favourite.&rsquo;' custom-class='mb-0 black-50')

</template>

<script>
import appButton from '~components/atoms/app-button'
import appHeading from '~components/atoms/app-heading'
import appParagraph from '~components/atoms/app-paragraph'

export default {
  name: 'app-events',

  data () {
    return {
      past_events: [
        { name: 'Coding 102: Website with HTML & CSS', description: '', datetime: 'Saturday, 12 August 2017 from 12:00 pm to 2:00 pm (AEST)', location: 'Isobar Australia, Level 4, 111 Cecil Street, South Melbourne', image: 'http://res.cloudinary.com/dvkozhom2/image/upload/v1502802378/young_coders_coding_102_11_vthtss.jpg', eventlink: 'https://www.eventbrite.com.au/e/cyber-security-for-kids-tickets-36513741584?ref=elink' },
        { name: 'Coding 101 : Building a Static Website', description: '', datetime: 'Saturday, 22 July 2017 from 12:00 pm to 2:00 pm (AEST)', location: '25 Glenferrie road, Malvern', image: 'http://res.cloudinary.com/dvkozhom2/image/upload/v1502802409/young_coders_coding_1011_rqxi3y.jpg', eventlink: 'https://www.eventbrite.com.au/e/cyber-security-for-kids-tickets-36513741584?ref=elink' }
      ],
      upcoming_events: [
        { name: 'Cyber Security for Kids', description: 'How can you teach your children to use the internet safely? It’s a question every parent thinks of as soon as their kids start using tablets & computers. Kids know all fun things that exist on Internet, for eg, social media, youtube, games, google, movies, images etc. What they don’t know is anything about viruses, online privacy, phishing, social networking etiquette, and any other internet safety and/or security issue you can think of. \nIt is our job to educate them with the good and bad things on internet. Explain them how to be safe on internet and understand what they shouldn\'t do.', datetime: 'Saturday, 26 August 2017 from 12:00 pm to 2:00 pm (AEST)', location: 'Isobar Australia, Level 4, 111 Cecil Street, South Melbourne', image: 'http://res.cloudinary.com/dvkozhom2/image/upload/v1502798530/youngcodersau_roebad.png', eventlink: 'https://www.eventbrite.com.au/e/cyber-security-for-kids-tickets-36513741584?ref=elink' }
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
