<script setup>
    const { post } = defineProps({
        post: Object
    })
    const { id, title } = post
</script>

<template>
    <li class="flex flex-row gap-4 w-full p-4 border rounded-xl ">
        <span>{{ id }}.</span>
        <h1>{{ title }}</h1>
    </li>
</template>