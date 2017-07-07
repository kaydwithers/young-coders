<template lang="pug">
.bg-white
  .mw9.center.ph3.ph4-ns.pv5.pv6-ns
    .tc
    app-heading(size='2' text='Team')
    .db.flex-ns.justify-center.flex-wrap
      .w-100.w-25-ns.ph4.tc
        img.db.ba.br-100.bw3.b--black-20.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/v1499400475/Young%20Coders/kruti.jpg')
        app-paragraph(size='5', text='Kruti' custom-class='black-50 mb0')
        app-paragraph(size='6', text='Founder')

      .w-100.w-25-ns.ph4.tc
        img.ba.br-100.bw3.b--black-20.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/v1499400476/Young%20Coders/kavi.jpg')
        app-paragraph(size='5', text='Kavita Mevada' custom-class='black-50 mb0')
        app-paragraph(size='6', text='Lead Workshop Manager')

      .w-100.w-25-ns.ph4.tc
        img.ba.br-100.bw3.b--black-20.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/v1499400475/Young%20Coders/hayley.jpg')
        app-paragraph(size='5', text='Hayley Carra' custom-class='black-50 mb0')
        app-paragraph(size='6', text='Editor-in-Chief')

      .w-100.w-25-ns.ph4.tc
        img.db.ba.br-100.bw3.b--black-20.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/v1499400475/Young%20Coders/shu.jpg')
        app-paragraph(size='5', text='Shuyen Phoon' custom-class='black-50 mb0') 
        app-paragraph(size='6', text='Editor-in-Chief')

      .w-100.w-25-ns.ph4.tc
        img.ba.br-100.bw3.b--black-20.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/v1499400476/Young%20Coders/sharath.jpg')
        app-paragraph(size='5', text='Sharath Raj' custom-class='black-50 mb0')
        app-paragraph(size='6', text='Web Developer')

      .w-100.w-25-ns.ph4.tc
        img.ba.br-100.bw3.b--black-20.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/v1499400476/Young%20Coders/dolly.jpg')
        app-paragraph(size='5', text='Dolly Desai' custom-class='black-50 mb0')
        app-paragraph(size='6', text='Event Organizer')

      .w-100.w-25-ns.ph4.tc
        img.ba.br-100.bw3.b--black-20.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/v1499262182/avatar-4_ehwbbi.jpg')
        app-paragraph(size='5', text='Raffi Martins')
        app-paragraph(size='6', text='Art Director')

      .w-100.w-25-ns.ph4.tc
        img.ba.br-100.bw3.b--black-20.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/v1499262182/avatar-4_ehwbbi.jpg')
        app-paragraph(size='5', text='Kayd Withers')
        app-paragraph(size='6', text='Web Developer')
    
    //- .tc
    //- app-heading(size='2' text='Board Of Directors')
    //- .db.flex-ns
      //- .w-100.w-25-ns.ph4.tc
      //-   img.db.ba.br-100.bw3.b--black-20.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/v1499262182/avatar-1_swz7b2.jpg')
      //-   app-paragraph(size='5', text='Erik Hallander') 
      //-   app-paragraph(size='6', text='APAC Innovation Director - Isobar')

      //- .w-100.w-25-ns.ph4.tc
      //-   img.ba.br-100.bw3.b--black-20.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/v1499262182/avatar-4_ehwbbi.jpg')
      //-   app-paragraph(size='5', text='Michael Riley')
      //-   app-paragraph(size='6', text='Finance / Business Analyst')

      //- .w-100.w-25-ns.ph4.tc
      //-   img.ba.br-100.bw3.b--black-20.mb4(src='http://res.cloudinary.com/dvjpaoffl/image/upload/q_auto/q_80/v1499262182/avatar-5_dwk7t8.jpg')
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
