<template>
  <div class="product-list">
    <div v-for="product in products" :key="product.id" class="product-card">
      <h3>{{ product.name }}</h3>
      <p>Preço: {{ product.price }}</p>
      <p>Estoque: {{ product.quantity }}</p>
      <p>Descrição: {{ product.description }}</p>
      <p>Status: {{ product.active ? 'Ativo' : 'Inativo' }}</p>
      <button @click="editProduct(product.id)" disabled>Editar</button>
      <button @click="deleteProduct(product.id)">Excluir</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: []
    }
  },
  methods: {
    loadProducts() {
      this.products = JSON.parse(localStorage.getItem('products')) || []
    },
    editProduct(productId) {
      //TODO Criar a rota para edição de produtos
      console.log('Editar produto:', productId)
    },
    deleteProduct(productId) {
      this.products = this.products.filter((product) => product.id !== productId)
      localStorage.setItem('products', JSON.stringify(this.products))
    }
  },
  mounted() {
    this.loadProducts()
  }
}
</script>

<style>
.product-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.product-card {
  min-width: 200px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  width: calc(33.333% - 20px);
}

.product-card button {
  margin-right: 10px;
}
</style>
