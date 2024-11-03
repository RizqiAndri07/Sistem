import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '@/views/BlogView.vue'
import BlogPost from '@/views/BlogPost.vue'
import AboutView from '@/views/AboutView.vue'
import ContacView from '@/views/ContactView.vue'
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue'
import CategoryView from '@/views/CategoryView.vue'
import AuthorView from '@/views/AuthorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/blogposts',
      name: 'blogposts',
      component: BlogPost,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContacView,
    },
    {
      path: '/privacypolicy',
      name: 'privacypolicy',
      component: PrivacyPolicyView,
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView,
    },
    {
      path: '/author',
      name: 'author',
      component: AuthorView,
    },
  ],
})

export default router
