<template lang="pug">
div
  app-hero(:hero='hero' text='Contact us' heroSmall)
  .bg-white
    .mw9.center.ph3.ph4-ns.pv6
      .w-100
        app-heading(size='2' :text='page.fields.heading')
        app-paragraph(size='4' :text='page.fields.content' customClass='mb5 black-50')

        form.black-50(name='contact', action='thankyou', netlify='')
          .measure
            .mb4
              label.f4.db.mb3(for='fname') First Name
              input#fname.input-reset.ba.b--black-20.pa3.db.w-100(
                type='text', name='firstname', placeholder='Your first name'
              )

            .mb4
              label.f4.db.mb3(for='lname') Last Name
              input#lname.input-reset.ba.b--black-20.pa3.db.w-100(
                type='text', name='lastname', placeholder='Your last name'
              )

            .mb4
              label.f4.db.mb3(for='email') Email*
              input#email.input-reset.ba.b--black-20.pa3.db.w-100(
                type='text', name='email', placeholder='Your email'
              )
              small.f6.black-60.db.mt3(id='name-desc') Helper text for the form control.

            .mb4
              label.f4.db.mb3(for='subject') Subject 
                span.normal.black-60 (optional)
              textarea#subject.input-reset.ba.b--black-20.pa3.db.w-100.h4(
                name='subject', placeholder='Your message'
              )

            input.f4.pointer.pa3.b0.dib.bn.br3.white.bg-blue(type='submit', value='Submit')

  </div>
</form>
</template>

<script>
import { cdaClient } from '~/plugins/contentful-client.js'
import appHeading from '~/components/atoms/app-heading'
import appHero from '~/components/organisms/app-hero'
import appParagraph from '~/components/atoms/app-paragraph'

export default {
  name: 'about',
  asyncData ({ params }) {
    return Promise.all([
      cdaClient.getEntries({
        'content_type': process.env.CTF_PAGE_ID,
        order: '-sys.createdAt'
      }),
      cdaClient.getEntries({
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
    appHeading,
    appHero,
    appParagraph
  }
}
</script>

<style>

</style>
