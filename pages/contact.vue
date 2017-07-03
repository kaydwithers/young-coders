<template lang="pug">
div
  app-hero(:hero="hero" heroSmall)
  head
    style.
      input[type=text], select, textarea {
      width: 100%;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
      margin-top: 6px;
      margin-bottom: 16px;
      resize: vertical;
      }
      input[type=submit] {
      background-color: #4CAF50;
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      }
      input[type=submit]:hover {
      background-color: #45a049;
      }
      .container {
      border-radius: 5px;
      background-color: #f2f2f2;
      padding: 20px;
      }
  body
    .bg-white
      .mw9.center.ph3.ph5-ns.pv6
        .w-100
        app-heading(size='2' :text='page.fields.heading')
        app-paragraph(size='4' :text='page.fields.content')
        .container
            form(action='/action_page.php')
              label(for='fname') First Name
              input#fname(type='text', name='firstname', placeholder='Your name..')
              label(for='lname') Last Name
              input#lname(type='text', name='lastname', placeholder='Your last name..')
              label(for='email') Email*
              input#email(type='text', name='email', placeholder='Your Email Id..')
              label(for='subject') Subject
              textarea#subject(name='subject', placeholder='Write something..', style='height:200px')
              input(type='submit', value='Submit')
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
        page: page.items[1]
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
