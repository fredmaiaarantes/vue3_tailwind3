import { createApp } from 'vue'

import '../imports/ui/plugins'

import App from '../imports/ui/App.vue'

Meteor.startup(() => {
  createApp({
    ...App,
  }).mount('#app');
})
