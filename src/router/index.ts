import { createRouter, createWebHistory } from 'vue-router'
import RegisterProductView from '../views/product/RegisterProductView.vue'
import SeeProductsView from '../views/product/SeeProductsView.vue'

import RegisterCustomerView from '../views/customer/RegisterCustomerView.vue'

import EditCustomerView from '../views/customer/EditCustomerView.vue'

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
    },
    {
      path: '/register-customer',
      name: 'register-customer',
      component: RegisterCustomerView
    },
    {
      path: '/customers',
      name: 'customers',
      component: SeeCustomerView
    },
    {
      path: '/edit-customer/:id',
      name: 'edit-customer',
      component: EditCustomerView
    }
  ]
})

export default router
