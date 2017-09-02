<template lang="pug">
.app-introduction
  .mw8.center.pv5.pv6-ns.ph3.ph4-ns.ph6-l.tc
    app-heading(size='2' text='Lil&rsquo; about us')
    .p4 We are a collective of developers, designers, and managers that are passionate about giving back to the community through education. We are a non-profit focused on providing basic coding lessons to kids and teenagers.
    app-button(primary destination='mailto:hello@youngcodersau.com' text='Email us')

</template>

<script>
import appHeading from '~/components/atoms/app-heading'
import appButton from '~/components/atoms/app-button'

export default {
  name: 'app-introduction',
  props: ['introduction'],
  components: {
    appHeading,
    appButton
  }
}
</script>
