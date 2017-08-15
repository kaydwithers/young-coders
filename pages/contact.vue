<template lang="pug">
div
  app-hero(:hero='hero' text='Contact us' hero-small)
  .bg-white
    .mw9.center.ph3.ph4-ns.pv6
      .w-100
        app-heading(size='2' :text='page.fields.heading')
        app-paragraph(size='4' :text='page.fields.content' custom-class='black-50 lh-2 mb0')

  .bg-lg-blue-light
    .mw9.center.ph3.ph4-ns.pv6
      .w-100
        form.black-50(
          action='https://formspree.io/kaydwithers@gmail.com' 
          method='POST' 
          name='contact' 
        )

          .dn
            label(for='bot-field') Don't fill this out.
            input(name='bot-field')

          .mb4.f5
            label.b.db.mb3(for='name') Name
            input#name.input-reset.ba.b--black-20.pa3.db.w-100(
              type='text' name='name' placeholder='Your name'
            )

          .mb4.f5
            label.b.db.mb3(for='_replyto') Email
            input#email.input-reset.ba.b--black-20.pa3.db.w-100(
              type='text' name='_replyto' placeholder='Your email'
            )
            //small.f6.black-60.db.mt3(id='name-desc') Helper text for the form control.

          .mb4.f5
            label.b.db.mb3(for='message') Message 
              span.normal.black-60 (optional)
            textarea#message.input-reset.ba.b--black-20.pa3.db.w-100.h4(
              name='message' placeholder='Your message'
            )

          input.f4.pointer.pa3.b0.dib.bn.br3.black(
            type="submit" class="form-control submit" value="Send"
          )

</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import appHeading from '~/components/atoms/app-heading'
import appHero from '~/components/organisms/app-hero'
import appParagraph from '~/components/atoms/app-paragraph'

const client = createClient()

export default {
  name: 'contact',
  asyncData ({env}) {
    return Promise.all([
      // fetch all pages sorted by creation date
      client.getEntries({
        'content_type': env.CTF_PAGE_ID,
        order: '-sys.createdAt'
      }),
      client.getEntries({
        'content_type': env.CTF_HERO_ID,
        order: '-sys.createdAt'
      })
    ]).then(([page, hero]) => {
      // return data that should be available
      // in the template
      return {
        hero: hero.items[0],
        page: page.items[3]
      }
    }).catch(console.error)
  },

  components: {
    appHeading,
    appHero,
    appParagraph
  }
}
</script>

<style>

</style>
