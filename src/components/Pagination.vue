<script setup>
    const { onChangePage } = defineProps({
        onChangePage: Function
    })

    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
</script>

<template>
  <div class="w-full flex flex-row justify-center">
    <ul class="flex flex-row w-[600px] gap-4">
      <li @click="onChangePage(page)" v-for="page of pages" :key="page" class="px-4 py-2 border rounded-md cursor-pointer">{{ page }}</li>
    </ul>
  </div>
</template>