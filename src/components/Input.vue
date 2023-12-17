<script setup>
  const {text, placeholder, onChange} = defineProps({
    text: String,
    placeholder: String,
    onChange: Function
  })
</script>

<template>
  <input class="border px-4 py-2 rounded-md w-[300px]" @input="onChange" :value="text" :placeholder="placeholder">
</template>