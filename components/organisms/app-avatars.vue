<template lang="pug">
.app-avatars
  .tc
    app-heading(size='2' text='Our Team' custom-class='white mb4')

    .db.flex-ns.justify-center.flex-wrap
      .w-100.w-25-ns.ph4.mb4.tc(v-for="avatar in avatars")
        img.db.ba.br-100.bw3.b--black-10.mb3(:src='avatar.image')
        app-paragraph(size='4' :text='avatar.name' custom-class='white mb0 lh-1')
        // app-paragraph(size='6' :text='avatar.description' custom-class='white-70 mb0')

    //- .tc
    //- app-heading(size='2' text='Board Of Directors')
    //- .db.flex-ns
      //- .w-100.w-25-ns.ph4.tc
      //-   img.db.ba.br-100.bw3.b--black-10.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,q_auto,w_auto,f_auto/v1499262182/avatar-1_swz7b2.jpg')
      //-   app-paragraph(size='5', text='Erik Hallander') 
      //-   app-paragraph(size='6', text='APAC Innovation Director - Isobar')

      //- .w-100.w-25-ns.ph4.tc
      //-   img.ba.br-100.bw3.b--black-10.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,q_auto,w_auto,f_auto/v1499262182/avatar-4_ehwbbi.jpg')
      //-   app-paragraph(size='5', text='Michael Riley')
      //-   app-paragraph(size='6', text='Finance / Business Analyst')

      //- .w-100.w-25-ns.ph4.tc
      //-   img.ba.br-100.bw3.b--black-10.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,q_auto,w_auto,f_auto/v1499262182/avatar-5_dwk7t8.jpg')
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
        { name: 'Kruti Patel', image: 'https://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,q_auto,w_auto,f_auto/v1499400475/Young%20Coders/kruti.jpg' },
        { name: 'Kavita Mevada', image: 'https://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,q_auto,w_auto,f_auto/v1499400476/Young%20Coders/kavi.jpg' },
        { name: 'Sharath Raj', image: 'https://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,q_auto,w_auto,f_auto/v1499400475/Young%20Coders/sharath.jpg' },
        { name: 'Hayley Carra', image: 'https://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,q_auto,w_auto,f_auto/v1499400475/Young%20Coders/hayley.jpg' },
        { name: 'Shuyen Phoon', image: 'https://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,q_auto,w_auto,f_auto/v1499400475/Young%20Coders/shu.jpg' },
        { name: 'Abby Goode', image: 'https://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_auto,f_auto/v1501076345/abby_rdthuy.jpg' },
        { name: 'Dolly Desai', image: 'https://res.cloudinary.com/dvjpaoffl/image/upload/q_auto,q_auto,w_auto,f_auto/v1499400475/Young%20Coders/dolly.jpg' },
        { name: 'Michael Riley', image: 'https://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_auto,f_auto/v1501073228/michael_j4qdnp.jpg' },
        { name: 'Abigail Corpus', image: 'https://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_auto,f_auto/v1501073020/abi_kgnxtj.jpg' },
        { name: 'Zubin Pratap', image: 'https://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_auto,f_auto/v1501076344/zubin_ms3krg.jpg' },
        { name: 'Kayd Withers', image: 'https://res.cloudinary.com/dvkozhom2/image/upload/q_auto,q_auto,w_auto,f_auto/v1501072666/kayd_qzu2mg.jpg' }
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
