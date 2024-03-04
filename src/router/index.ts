import { createRouter, createWebHistory } from 'vue-router'
import RegisterProductView from '../views/product/RegisterProductView.vue'
import SeeProductsView from '../views/product/SeeProductsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/products',
      name: 'products',
      component: SeeProductsView
    },
    {
      path: '/register-product',
      name: 'register-product',
      component: RegisterProductView
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
