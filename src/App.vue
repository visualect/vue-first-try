<script setup>
  import Header from './components/Header.vue';
  import { RouterView } from 'vue-router'
</script>

<template>
  <main class="font-roboto">
    <Header />
    <RouterView />
  </main>
</template>
