import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path : '/',
    redirect : '/browse'
  },
  {
    path: '/browse',
    name: 'Browse',
    component : () => import('../pages/BrowsePage.vue')
  },
  {
    path: '/signin',
    name: 'Auth',
    component : () => import('../pages/SignIn.vue')
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})