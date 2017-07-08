<template lang="pug">
div
  .tc
  app-heading(size='2' text='Team' custom-class='white mb4')
  .db.flex-ns.justify-center.flex-wrap
    .w-100.w-25-ns.ph4.mb4.tc
      img.db.ba.br-100.bw3.b--black-10.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/w_400/v1499400475/Young%20Coders/kruti.jpg')
      app-paragraph(size='5', text='Kruti' custom-class='white mb0 lh-1')
      app-paragraph(size='6', text='Founder' custom-class='white-70 mb0')

    .w-100.w-25-ns.ph4.mb4.tc
      img.ba.br-100.bw3.b--black-10.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/w_400/v1499400476/Young%20Coders/kavi.jpg')
      app-paragraph(size='5', text='Kavita Mevada' custom-class='white mb0 lh-1')
      app-paragraph(size='6', text='Lead Workshop Manager' custom-class='white-70 mb0')

    .w-100.w-25-ns.ph4.mb4.tc
      img.ba.br-100.bw3.b--black-10.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/w_400/v1499400475/Young%20Coders/hayley.jpg')
      app-paragraph(size='5', text='Hayley Carra' custom-class='white mb0 lh-1')
      app-paragraph(size='6', text='Editor-in-Chief' custom-class='white-70 mb0')

    .w-100.w-25-ns.ph4.mb4.tc
      img.db.ba.br-100.bw3.b--black-10.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/w_400/v1499400475/Young%20Coders/shu.jpg')
      app-paragraph(size='5', text='Shuyen Phoon' custom-class='white mb0 lh-1') 
      app-paragraph(size='6', text='Editor-in-Chief' custom-class='white-70 mb0')

    .w-100.w-25-ns.ph4.mb4.tc
      img.ba.br-100.bw3.b--black-10.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/w_400/v1499400476/Young%20Coders/sharath.jpg')
      app-paragraph(size='5', text='Sharath Raj' custom-class='white mb0 lh-1')
      app-paragraph(size='6', text='Web Developer' custom-class='white-70 mb0')

    .w-100.w-25-ns.ph4.mb4.tc
      img.ba.br-100.bw3.b--black-10.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/w_400/v1499400476/Young%20Coders/dolly.jpg')
      app-paragraph(size='5', text='Dolly Desai' custom-class='white mb0 lh-1')
      app-paragraph(size='6', text='Event Organizer' custom-class='white-70 mb0')

    .w-100.w-25-ns.ph4.mb4.tc
      img.ba.br-100.bw3.b--black-10.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/w_400/v1499262182/avatar-4_ehwbbi.jpg')
      app-paragraph(size='5', text='Raffi Martins' custom-class='white mb0 lh-1')
      app-paragraph(size='6', text='Art Director' custom-class='white-70 mb0')

    .w-100.w-25-ns.ph4.mb4.tc
      img.ba.br-100.bw3.b--black-10.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/w_400/v1499262182/avatar-1_swz7b2.jpg')
      app-paragraph(size='5', text='Kayd Withers' custom-class='white mb0 lh-1')
      app-paragraph(size='6', text='Web Developer' custom-class='white-70 mb0')
  
  //- .tc
  //- app-heading(size='2' text='Board Of Directors')
  //- .db.flex-ns
    //- .w-100.w-25-ns.ph4.tc
    //-   img.db.ba.br-100.bw3.b--black-10.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/w_400/v1499262182/avatar-1_swz7b2.jpg')
    //-   app-paragraph(size='5', text='Erik Hallander') 
    //-   app-paragraph(size='6', text='APAC Innovation Director - Isobar')

    //- .w-100.w-25-ns.ph4.tc
    //-   img.ba.br-100.bw3.b--black-10.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/w_400/v1499262182/avatar-4_ehwbbi.jpg')
    //-   app-paragraph(size='5', text='Michael Riley')
    //-   app-paragraph(size='6', text='Finance / Business Analyst')

    //- .w-100.w-25-ns.ph4.tc
    //-   img.ba.br-100.bw3.b--black-10.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/w_400/v1499262182/avatar-5_dwk7t8.jpg')
    //-   app-paragraph(size='5', text='Kara Bombell)
    //-   app-paragraph(size='6', text='Mobile and Production Director - Isobar')

</template>

<script>
import appHeading from '~/components/atoms/app-heading'
import appParagraph from '~/components/atoms/app-paragraph'

export default {
  name: 'app-footer',
  components: {
    appHeading,
    appParagraph
  }
}
</script>

<style>

</style>
