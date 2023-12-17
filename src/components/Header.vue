<script setup>
    import Logo from './Logo.vue';
    import { RouterLink } from 'vue-router'

</script>


<template>
    <header class="flex flex-row justify-between px-8 py-2 border-b">
        <div class="flex flex-row">
            <RouterLink to="/">
                <Logo>Vue Simple Blog</Logo>
            </RouterLink>
        </div>
        <nav class="flex flex-row gap-8">
            <RouterLink to="/">Posts</RouterLink>
            <RouterLink to="/users">Users</RouterLink>
        </nav>
    </header>
</template>