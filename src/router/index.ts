import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'overview',
      component: () => import('../views/Overview.vue')
    },
    {
      path: '/house-details',
      name: 'house-details',
      component: () => import('../views/HouseDetails.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    } ,
    {
      path: '/edit',
      name: 'edit',
      component: () => import('../views/HouseDetailsEdit.vue')
    } ,
    {
      path: '/house-create',
      name: 'house-create',
      component: () => import('../views/HouseCreate.vue')
    }
  ]
})

export default router
