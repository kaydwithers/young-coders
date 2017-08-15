<template lang="pug">
 .app-events
  .bg-white
    .mw9.center.ph3.ph4-ns.pv5.pv6-ns.tc
      .db.flex-ns.justify-center.flex-wrap
        .w-100.w-100-ns.ph4.mb5.mb0-ns.tc
          app-heading(size='2', text='Upcoming Events')
          .db.flex-ns.justify-center.flex-wrap
          .w-100.bw1.w-50-ns.ph4.mb4.tc(v-for="event in upcoming_events")
            app-paragraph(size='6' :text='event.datetime' custom-class='black-70 mb0')
            img.db.ba.bw1.b--black-10.mb3(:src='event.image')
            app-paragraph(size='4' :text='event.name' custom-class='black mb0 lh-1')
            app-paragraph(size='6' :text='event.location' custom-class='black-70 mb0')
            app-paragraph(size='6' :text='event.description' custom-class='black-70 mb0') 
            app-button(primary destination='https://www.eventbrite.com.au/e/cyber-security-for-kids-tickets-36513741584?ref=elink' text='Click to Register')

  .bg-lg-titanium
    .mw9.center.ph3.ph4-ns.pv6
      .w-100
         .w-100.w-100-ns.ph4.tc
          app-heading(size='2', text='Past Events' custom-class='white mb4')
          .db.flex-ns.justify-center.flex-wrap
            .w-100.w-50-ns.ph4.mb4.tc(v-for="event in past_events")
              img.db.ba.bw3.b--black-10.mb3(:src='event.image')
              app-paragraph(size='4' :text='event.name' custom-class='white mb0 lh-1')
              app-paragraph(size='6' :text='event.description' custom-class='white-70 mb0')
              app-paragraph(size='6' :text='event.datetime' custom-class='white-70 mb0')
              app-paragraph(size='6' :text='event.location' custom-class='white-70 mb0') 
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
