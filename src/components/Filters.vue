<script setup>
  import Input from './Input.vue'

  const { searchFilter, onChange } = defineProps({
    searchFilter: String,
    onChange: Function
  })
</script>

<template>
  <div class="flex flex-row w-full justify-center">
    <Input :text="searchFilter" :onChange="onChange" :placeholder="'Search'"/>
  </div>
</template>