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
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})