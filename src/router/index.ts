import { createRouter, createWebHistory } from 'vue-router'

import RegisterProductView from '../views/product/RegisterProductView.vue'
import SeeProductsView from '../views/product/ProductsView.vue'
import EditProductView from '../views/product/EditProductView.vue'

import RegisterCustomerView from '../views/customer/RegisterCustomerView.vue'
import SeeCustomerView from '../views/customer/CustomersView.vue'
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
      path: '/add-product',
      name: 'add-product',
      component: RegisterProductView
    },
    {
      path: '/edit-product/:id',
      name: 'edit-product',
      component: EditProductView
    },
    {
      path: '/add-customer',
      name: 'add-customer',
      component: RegisterCustomerView
    },
    {
      path: '/',
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
