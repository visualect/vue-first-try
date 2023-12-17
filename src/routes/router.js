import { createRouter, createWebHistory } from 'vue-router'
import Posts from '../pages/Posts.vue'
import Users from '../pages/Users.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Posts },
        { path: '/users', name: 'Users', component: Users },
    ]
})

export default router