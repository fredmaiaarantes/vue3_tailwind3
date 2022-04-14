<template>
  <h1 class="text-3xl text-red-800">
    Welcome to Meteor + Tailwind!
  </h1>
  <h2>Learn Meteor with Vue 3 with new component syntax!</h2>
  <button @click="increment()">Click Me</button>
  <p>You've pressed the button {{counter}} times.</p>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)

function increment () {
  counter.value++
  console.log('incremented!')
}
</script>

<style scoped>
button {
  background: #224e64;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
}
</style>
