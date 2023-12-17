<script setup>
  const { message } = defineProps({
    message: String
  })
</script>

<template>
  <p class="w-full text-center">{{ message }}</p>
</template>
