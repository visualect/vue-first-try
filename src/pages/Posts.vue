<script setup>
    import { ref, computed } from 'vue'
    import PostItem from '../components/PostItem.vue';
    import Pagination from '@/components/Pagination.vue';
    import Filters from '@/components/Filters.vue';
    import EmptyState from '@/components/EmptyState.vue'
    import usePostsFilter from '@/hooks/usePostsFilter.js'
    import { useQuery } from "@tanstack/vue-query";
    import PostsService from '@/actions/PostsService.js'

    const searchFilter = ref('')
    const currentPage = ref(1)

    const { isPending, isFetching, isError, data: posts, error } = useQuery({
      queryKey: ['posts', currentPage],
      queryFn: () => PostsService.getPerPage(currentPage.value),
    })

    const onChangePage = (newPageNum) => currentPage.value = newPageNum
    const onChangeFilter = (e) => searchFilter.value = e.target.value

    const filteredPosts = computed(() => usePostsFilter(posts.value, searchFilter.value)) ?? []
</script>

<template>
    <div class="flex flex-col gap-8 w-[800px] mx-auto my-12">
        <Pagination :onChangePage="onChangePage"/>
        <Filters :searchFilter="searchFilter" :onChange="onChangeFilter"/>
         <ul v-if="!isPending" class="flex flex-col gap-4 w-full">
           <EmptyState v-if="filteredPosts.length === 0" :message="'Posts are not found'" />
           <PostItem v-else v-for="post of filteredPosts" :key="post.id" :post="post" />
         </ul>
        <EmptyState v-else :message="'Loading...'" />
    </div>
</template>