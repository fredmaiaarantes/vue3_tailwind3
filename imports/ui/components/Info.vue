<script setup>
import Links from '/imports/api/collections/Links'
import { subscribe, autoSubscribe, autoResult } from 'meteor/vuejs:vue3'

const { ready } = subscribe('links')
// const { ready } = autoSubscribe(() => ['links.all'])

const links = autoResult(() => Links.find({}))

function submit (form) {
  const title = form.title
  const url = form.url

  Meteor.call('createLink', title.value, url.value, (error) => {
    if (error) {
      alert(error.error)
    } else {
      title.value = ''
      url.value = ''
    }
  })
}
</script>

<template>
  <h2>Learn Meteor!</h2>
  <ul>
    <li>
      <form @submit.prevent="submit($event.target)">
        <input type="text" name="title" placeholder="Title" required>
        <input type="url" name="url" placeholder="Url" required>
        <input type="submit" name="submit" value="Add new link">
      </form>
    </li>

    <div v-if="!ready">Loading...</div>

    <li v-for="link of links" :key="link._id">
      <a :href="link.url" target="_blank">{{ link.title }}</a>
    </li>
  </ul>
</template>
