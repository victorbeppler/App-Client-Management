<template>
  <div class="wrapper-product">
    <div class="header">
      <h2>Lista de Produtos</h2>
      <button class="btn btn-add" @click="addProduct">
        <font-awesome-icon :icon="['fas', 'plus']" />
        Novo Produto
      </button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>
            <div v-if="product.active">
              <div class="circleActive" />
              Ativo
            </div>
            <div v-else>
              <div class="circleRed" />
              Inativo
            </div>
          </td>
          <td>
            <div class="action">
              <button class="btn btn-edit" @click="editProduct(product.id)">Editar</button>
              <button class="btn btn-delete" @click="deleteProduct(product.id)">Excluir</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
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
    addProduct() {
      this.$router.push({ name: 'add-product' })
    },
    editProduct(productId) {
      console.log('productId', productId)
      this.$router.push({ name: 'edit-product', params: { id: productId } })
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
.wrapper-product {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
}

table {
  width: 90%;
  border-collapse: collapse;
  margin: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

caption {
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

th,
td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: gray;
  color: white;
}

tr:hover {
  background-color: #f5f5f5;
}

.btn {
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 16px;
}

.btn-edit {
  background-color: yellow;
  color: #333;
}

.btn-delete {
  background-color: red;
  color: white;
}

.btn-edit:hover,
.btn-delete:hover {
  opacity: 0.8;
}

.circleActive {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: green;
}
.circleRed {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: red;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%; /* De acordo com a largura da sua tabela */
  margin: 20px auto 10px; /* Ajuste conforme necessário */
}

h2 {
  margin: 0;
}

.btn-add {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.btn-add:hover {
  background-color: darkgray;
}

.icon-plus {
  color: white;
}

.action {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
</style>
