<template>
  <div class="app">
    <h1>{{ message }}</h1>
    <p>Welcome to ITECC6!</p>
    <p class="student">Student: Jane Bangyad</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello from Vue.js!')
</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 2rem;
}

.student {
  color: #555;
  font-style: italic;
}
</style>
