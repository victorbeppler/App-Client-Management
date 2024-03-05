<script lang="ts">
import MenuApp from './components/Header.vue'
import { RouterView } from 'vue-router'
import { mockCustomers } from './mocks/customer'
import { mockProducts } from './mocks/product'

export default {
  name: 'App',
  components: {
    MenuApp,
    RouterView
  },
  mounted() {
    this.initializeMockData()
  },
  methods: {
    initializeMockData() {
      if (!localStorage.getItem('customers')) {
        localStorage.setItem('customers', JSON.stringify(mockCustomers))
      }

      if (!localStorage.getItem('products')) {
        localStorage.setItem('products', JSON.stringify(mockProducts))
      }
    }
  }
}
</script>

<template>
  <MenuApp />
  <RouterView />
</template>
