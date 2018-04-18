<template lang="pug">
div
  app-hero(:hero='hero' text='Design & Code Jam' hero-small)
  .bg-white
    .mw9.center.ph3.ph4-ns.pv6
      .w-100
        app-heading(size='2' text='Young Coders AU is proud partner with Victoria University for the biggest ever Code Jam.')
        vue-markdown.p4.mb0 {{ 'We are extremely proud to announce that we have partnered with Victoria University and coming up with an event called Code Jam. We are going to host workshops at Victoria University teaching how to make iOS sticker apps. There will be a healthy competition where highest downloaded sticker app will win the competition.'}}
        app-button(
              primary 
              destination='event.eventlink' 
              target='_blank'
              text='Click to Register'
            )
  #portfolio.section.md-padding.bg-grey
      .section-header.text-center
      h2.title the amazing mentors
      .row 
        table(style='width:100%')
          tr
            th
              .col-md-4.col-xs-6.work
                img.img-responsive(src='https://cdn-images-1.medium.com/max/200/1*9fEruVsWQFYLtXhWTcBDMw.jpeg', alt='')
                .overlay
                .work-content
                  span Kruti Dhaval Patel
                  h3 Founder - Young Coders AU
                  h5
                    | Kruti loves new, innovative, creative and emerging technologies and is an advocate of such within developer community and beyond. Kruti’s passion for technology made her finalist of B&T Women in Tech Awards 2017. With the help of two mentors already known for their genius within the industry, she was empowered to introduce herself into the tech industry as a very outspoken, technically strong, confident individual which led her to delivering engaging tech talks and workshops includes General Assembly, Pause Festival, Future Assembly and Google Developers Meetups just to name a few.  ’.
            th
              .col-md-4.col-xs-6.work
                img.img-responsive(src='https://cdn-images-1.medium.com/max/200/1*9fEruVsWQFYLtXhWTcBDMw.jpeg', alt='')
                .overlay
                .work-content
                  span Kruti Dhaval Patel
                  h3 Founder - Young Coders AU
                  h5
                    | Kruti loves new, innovative, creative and emerging technologies and is an advocate of such within developer community and beyond. Kruti’s passion for technology made her finalist of B&T Women in Tech Awards 2017. With the help of two mentors already known for their genius within the industry, she was empowered to introduce herself into the tech industry as a very outspoken, technically strong, confident individual which led her to delivering engaging tech talks and workshops includes General Assembly, Pause Festival, Future Assembly and Google Developers Meetups just to name a few.  ’.
            th
              .col-md-4.col-xs-6.work
                img.img-responsive(src='https://cdn-images-1.medium.com/max/200/1*9fEruVsWQFYLtXhWTcBDMw.jpeg', alt='')
                .overlay
                .work-content
                  span Kruti Dhaval Patel
                  h3 Founder - Young Coders AU
                  h5
                    | Kruti loves new, innovative, creative and emerging technologies and is an advocate of such within developer community and beyond. Kruti’s passion for technology made her finalist of B&T Women in Tech Awards 2017. With the help of two mentors already known for their genius within the industry, she was empowered to introduce herself into the tech industry as a very outspoken, technically strong, confident individual which led her to delivering engaging tech talks and workshops includes General Assembly, Pause Festival, Future Assembly and Google Developers Meetups just to name a few.  ’.
          tr
            td
              .col-md-4.col-xs-6.work
                img.img-responsive(src='https://cdn-images-1.medium.com/max/200/1*9fEruVsWQFYLtXhWTcBDMw.jpeg', alt='')
                .overlay
                .work-content
                  span Kruti Dhaval Patel
                  h3 Founder - Young Coders AU
                  h5
                    | Kruti loves new, innovative, creative and emerging technologies and is an advocate of such within developer community and beyond. Kruti’s passion for technology made her finalist of B&T Women in Tech Awards 2017. With the help of two mentors already known for their genius within the industry, she was empowered to introduce herself into the tech industry as a very outspoken, technically strong, confident individual which led her to delivering engaging tech talks and workshops includes General Assembly, Pause Festival, Future Assembly and Google Developers Meetups just to name a few.  ’.
            td
              .col-md-4.col-xs-6.work
                img.img-responsive(src='https://cdn-images-1.medium.com/max/200/1*9fEruVsWQFYLtXhWTcBDMw.jpeg', alt='')
                .overlay
                .work-content
                  span Kruti Dhaval Patel
                  h3 Founder - Young Coders AU
                  h5
                    | Kruti loves new, innovative, creative and emerging technologies and is an advocate of such within developer community and beyond. Kruti’s passion for technology made her finalist of B&T Women in Tech Awards 2017. With the help of two mentors already known for their genius within the industry, she was empowered to introduce herself into the tech industry as a very outspoken, technically strong, confident individual which led her to delivering engaging tech talks and workshops includes General Assembly, Pause Festival, Future Assembly and Google Developers Meetups just to name a few.  ’.
            td
              .col-md-4.col-xs-6.work
                img.img-responsive(src='https://cdn-images-1.medium.com/max/200/1*9fEruVsWQFYLtXhWTcBDMw.jpeg', alt='')
                .overlay
                .work-content
                  span Kruti Dhaval Patel
                  h3 Founder - Young Coders AU
                  h5
                    | Kruti loves new, innovative, creative and emerging technologies and is an advocate of such within developer community and beyond. Kruti’s passion for technology made her finalist of B&T Women in Tech Awards 2017. With the help of two mentors already known for their genius within the industry, she was empowered to introduce herself into the tech industry as a very outspoken, technically strong, confident individual which led her to delivering engaging tech talks and workshops includes General Assembly, Pause Festival, Future Assembly and Google Developers Meetups just to name a few.  ’.
          tr
            td
              .col-md-4.col-xs-6.work
                img.img-responsive(src='https://cdn-images-1.medium.com/max/200/1*9fEruVsWQFYLtXhWTcBDMw.jpeg', alt='')
                .overlay
                .work-content
                  span Kruti Dhaval Patel
                  h3 Founder - Young Coders AU
                  h5
                    | Kruti loves new, innovative, creative and emerging technologies and is an advocate of such within developer community and beyond. Kruti’s passion for technology made her finalist of B&T Women in Tech Awards 2017. With the help of two mentors already known for their genius within the industry, she was empowered to introduce herself into the tech industry as a very outspoken, technically strong, confident individual which led her to delivering engaging tech talks and workshops includes General Assembly, Pause Festival, Future Assembly and Google Developers Meetups just to name a few.  ’.
            td
              .col-md-4.col-xs-6.work
                img.img-responsive(src='https://cdn-images-1.medium.com/max/200/1*9fEruVsWQFYLtXhWTcBDMw.jpeg', alt='')
                .overlay
                .work-content
                  span Kruti Dhaval Patel
                  h3 Founder - Young Coders AU
                  h5
                    | Kruti loves new, innovative, creative and emerging technologies and is an advocate of such within developer community and beyond. Kruti’s passion for technology made her finalist of B&T Women in Tech Awards 2017. With the help of two mentors already known for their genius within the industry, she was empowered to introduce herself into the tech industry as a very outspoken, technically strong, confident individual which led her to delivering engaging tech talks and workshops includes General Assembly, Pause Festival, Future Assembly and Google Developers Meetups just to name a few.  ’.
            td
              .col-md-4.col-xs-6.work
                img.img-responsive(src='https://cdn-images-1.medium.com/max/200/1*9fEruVsWQFYLtXhWTcBDMw.jpeg', alt='')
                .overlay
                .work-content
                  span Kruti Dhaval Patel
                  h3 Founder - Young Coders AU
                  h5
                    | Kruti loves new, innovative, creative and emerging technologies and is an advocate of such within developer community and beyond. Kruti’s passion for technology made her finalist of B&T Women in Tech Awards 2017. With the help of two mentors already known for their genius within the industry, she was empowered to introduce herself into the tech industry as a very outspoken, technically strong, confident individual which led her to delivering engaging tech talks and workshops includes General Assembly, Pause Festival, Future Assembly and Google Developers Meetups just to name a few.  ’.
          tr
            td
              .col-md-4.col-xs-6.work
                img.img-responsive(src='https://cdn-images-1.medium.com/max/200/1*9fEruVsWQFYLtXhWTcBDMw.jpeg', alt='')
                .overlay
                .work-content
                  span Kruti Dhaval Patel
                  h3 Founder - Young Coders AU
                  h5
                    | Kruti loves new, innovative, creative and emerging technologies and is an advocate of such within developer community and beyond. Kruti’s passion for technology made her finalist of B&T Women in Tech Awards 2017. With the help of two mentors already known for their genius within the industry, she was empowered to introduce herself into the tech industry as a very outspoken, technically strong, confident individual which led her to delivering engaging tech talks and workshops includes General Assembly, Pause Festival, Future Assembly and Google Developers Meetups just to name a few.  ’.
            td
              .col-md-4.col-xs-6.work
                img.img-responsive(src='https://cdn-images-1.medium.com/max/200/1*9fEruVsWQFYLtXhWTcBDMw.jpeg', alt='')
                .overlay
                .work-content
                  span Kruti Dhaval Patel
                  h3 Founder - Young Coders AU
                  h5
                    | Kruti loves new, innovative, creative and emerging technologies and is an advocate of such within developer community and beyond. Kruti’s passion for technology made her finalist of B&T Women in Tech Awards 2017. With the help of two mentors already known for their genius within the industry, she was empowered to introduce herself into the tech industry as a very outspoken, technically strong, confident individual which led her to delivering engaging tech talks and workshops includes General Assembly, Pause Festival, Future Assembly and Google Developers Meetups just to name a few.  ’.
            td
              .col-md-4.col-xs-6.work
                img.img-responsive(src='https://cdn-images-1.medium.com/max/200/1*9fEruVsWQFYLtXhWTcBDMw.jpeg', alt='')
                .overlay
                .work-content
                  span Kruti Dhaval Patel
                  h3 Founder - Young Coders AU
                  h5
                    | Kruti loves new, innovative, creative and emerging technologies and is an advocate of such within developer community and beyond. Kruti’s passion for technology made her finalist of B&T Women in Tech Awards 2017. With the help of two mentors already known for their genius within the industry, she was empowered to introduce herself into the tech industry as a very outspoken, technically strong, confident individual which led her to delivering engaging tech talks and workshops includes General Assembly, Pause Festival, Future Assembly and Google Developers Meetups just to name a few.  ’.

</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import appButton from '~/components/atoms/app-button'
import appHeading from '~/components/atoms/app-heading'
import appHero from '~/components/organisms/app-hero'
import appParagraph from '~/components/atoms/app-paragraph'

const client = createClient()

export default {
  name: 'sucess',
  asyncData ({ params }) {
    return Promise.all([
      client.getEntries({
        'content_type': process.env.CTF_PAGE_ID,
        order: '-sys.createdAt'
      }),
      client.getEntries({
        'content_type': process.env.CTF_HERO_ID,
        order: '-sys.createdAt'
      })
    ]).then(([page, hero]) => {
      return {
        hero: hero.items[0],
        page: page.items[2]
      }
    }).catch(console.error)
  },
  components: {
    appButton,
    appHeading,
    appHero,
    appParagraph
  }
}
</script>

<style>
</style>
