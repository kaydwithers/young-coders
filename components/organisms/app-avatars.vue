<template lang="pug">
.app-avatars
  .tc.mb5
    app-heading(size='2' text='Our Team' custom-class='white mb4')
    .db.flex-ns.justify-center.flex-wrap
      .w-100.w-25-ns.ph5.mb5.tc(v-for="avatar in avatars")
        img.db.br-100.mb3(:src='avatar.image')
        .p5.white.mb0(v-text='avatar.name')
        .p6.white.mb0(v-html='avatar.description')

  .tc
    app-heading(size='2' text='Our Advisors' custom-class='white mb4')
    .db.flex-ns.justify-center.flex-wrap
      .w-100.w-25-ns.ph5.mb5.tc(v-for="advisor in advisors")
        img.db.br-100.mb3(:src='advisor.image')
        .p5.white.mb0(v-text='advisor.name')
        app-paragraph(size='6', text='APAC Innovation Director - Isobar')
        //.p6.white.mb0(v-html='avatar.description')

    //- .tc
    //- app-heading(size='2' text='Board Of Directors')
    //- .db.flex-ns
      //- .w-100.w-25-ns.ph4.tc
      //-   img.db.ba.br-100.bw3.b--black-10.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,q_auto,w_400,f_auto/v1499262182/avatar-1_swz7b2.jpg')
      //-   app-paragraph(size='5', text='Erik Hallander') 
      //-   app-paragraph(size='6', text='APAC Innovation Director - Isobar')

      //- .w-100.w-25-ns.ph4.tc
      //-   img.ba.br-100.bw3.b--black-10.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,q_auto,w_400,f_auto/v1499262182/avatar-4_ehwbbi.jpg')
      //-   app-paragraph(size='5', text='Michael Riley')
      //-   app-paragraph(size='6', text='Finance / Business Analyst')

      //- .w-100.w-25-ns.ph4.tc
      //-   img.ba.br-100.bw3.b--black-10.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,q_auto,w_400,f_auto/v1499262182/avatar-5_dwk7t8.jpg')
      //-   app-paragraph(size='5', text='Kara Bombell)
      //-   app-paragraph(size='6', text='Mobile and Production Director - Isobar')

</template>

<script>
import appHeading from '~/components/atoms/app-heading'
import appParagraph from '~/components/atoms/app-paragraph'

export default {
  name: 'app-avatars',

  data () {
    return {
      avatars: [
        { name: 'Kruti Patel',
          image: 'https://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,q_auto,w_400,f_auto/v1499400475/Young%20Coders/kruti.jpg',
          description: 'Founder - YOUNG CODERS AU & Senior Engineer - iflix'},
        { name: 'Kavita Mevada',
          image: 'https://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,q_auto,w_400,f_auto/v1499400476/Young%20Coders/kavi.jpg',
          description: 'Mobile Developer - Isobar'},
        { name: 'Sharath Raj',
          image: 'https://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,q_auto,w_400,f_auto/v1499400475/Young%20Coders/sharath.jpg',
          description: 'Senior Frontend Developer - CHE Proximity' },
        { name: 'Hayley Carra',
          image: 'https://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,q_auto,w_400,f_auto/v1499400475/Young%20Coders/hayley.jpg',
          description: 'Experiance Designer - Isobar' },
        { name: 'Shuyen Phoon',
          image: 'https://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,q_auto,w_400,f_auto/v1499400475/Young%20Coders/shu.jpg',
          description: 'Strategic Designer - ‎Isobar'},
        { name: 'Reuben Countinho',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_400,f_auto/v1525266146/reuben_y2qgf1.jpg',
          description: '.Net Developer - Isobar' },
        { name: 'Dolly Desai',
          image: 'https://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,q_auto,w_400,f_auto/v1499400475/Young%20Coders/dolly.jpg',
          description: 'Architect' },
        { name: 'Abigail Corpus',
          image: 'https://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_400,f_auto/v1501073020/abi_kgnxtj.jpg',
          description: 'Java Developer - Victorian Government' },
        { name: 'Zubin Pratap',
          image: 'https://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_400,f_auto/v1501076344/zubin_ms3krg.jpg',
          description: 'Founder - Whooshka' },
        { name: 'Kayd Withers',
          image: 'https://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_400,f_auto/v1501072666/kayd_qzu2mg.jpg',
          description: 'Senior Frontend Developer - Isobar' },
        { name: 'Viv Farrington',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_400,f_auto/v1503401715/viv_wscvle.jpg',
          description: 'Senior Consultant - Digital - ‎Morgan Consulting' },
        { name: 'Gurdev Singh',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_400,f_auto/v1525261972/gurdev_jknm6n.jpg',
          description: 'Master of Technology Student - RMIT' },
        { name: 'Tanisha Amyn',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_400,f_auto/v1525263331/tanisha_ybc1jw.jpg',
          description: 'Founder - AZTA Group' },
        { name: 'Johan Mouchet',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_400,f_auto/v1525263548/johan_fe2vjy.jpg',
          description: 'Frontend developer - Isobar' },
        { name: 'Laurel Richardson',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_400,f_auto/v1525263812/Laurel_iyolhg.jpg',
          description: 'Talent Advocate - ‎Affix Group Pty Ltd' },
        { name: 'Dave Sharpe',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_400,f_auto/v1525264908/sharpe_euo6l7.jpg',
          description: 'Technical Director - Isobar' },
        { name: 'Guill Rodas',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_400,f_auto/v1525265006/guill_ccx9wr.jpg',
          description: 'Technical Director - Deepend' },
        { name: 'Nhu To',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_400,f_auto/v1525264075/nhu_rg9ipg.jpg',
          description: 'Sponsorships Manager - Young Coders AU' },
        { name: 'Purvi Shah',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_400,f_auto/v1525265445/purvi_h7azg6.jpg',
          description: 'UX, UI, Visual Designer - ‎Design2Work' },
        { name: 'Arshad Ahmed',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_400,f_auto/v1525264528/Arshad_zove6q.jpg',
          description: 'ICT Officer - Yarra Trams' },
        { name: 'Jenny Namster',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_400,f_auto/v1525265703/placeholder_zv3bqw.png',
          description: 'Volunteer - Young Coders AU' },
        { name: 'Saritha Reddy',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_400,f_auto/v1525265703/placeholder_zv3bqw.png',
          description: 'Volunteer - Young Coders AU' },
        { name: 'Sufiyan Ghori',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_400,f_auto/v1525265703/placeholder_zv3bqw.png',
          description: 'Volunteer - Young Coders AU' }
      ],
      advisors: [
        { name: 'Erik Hallander',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_400,f_auto/v1503402407/ErikHallander_uboch7.jpg',
          description: 'Managing Director - ‎Isobar' },
        { name: 'Kara Bombell',
          image: 'https://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_400,f_auto/v1503403061/karabombell_wm2el6.jpg',
          description: 'Operations Director - ‎Isobar' },
        { name: 'Michael Riley',
          image: 'https://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_400,f_auto/v1501073228/michael_j4qdnp.jpg',
          description: 'Finance Manager - ‎CrownBet Pty Limited' },
        { name: 'Shai Roitman',
          image: 'http://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_400,f_auto/v1525262464/shai_tu4kvi.jpg',
          description: 'Talent Acquisition Manager & Innovation Council Member - Dentsu Aegis Network ANZ' }
      ]
    }
  },

  components: {
    appHeading,
    appParagraph
  }
}
</script>

<style>

</style>
