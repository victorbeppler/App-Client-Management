<template>
  <div class="wrapper-product">
    <div class="header">
      <h2>Lista de Produtos</h2>
      <button class="btn btn-add" @click="addProduct">
        <font-awesome-icon :icon="['fas', 'plus']" />
        Novo Produto
      </button>
    </div>

    <div class="body">
      <TableDisplay :headers="tableHeaders" :rows="products">
        <template v-slot:name="{ row }">
          {{ row.name }}
        </template>
        <template v-slot:active="{ row }">
          <span :class="{ 'text-green': row.active, 'text-red': !row.active }">
            {{ row.active ? 'Ativo' : 'Inativo' }}
          </span>
        </template>
        <template v-slot:actions="{ row }">
          <div class="action">
            <button class="btn btn-edit" @click="editProduct(row.id)" type="button">
              <div class="container-icon">
                <font-awesome-icon :icon="['fas', 'pencil']" class="icon-size" />
                Editar
              </div>
            </button>
            <button class="btn btn-delete" @click="deleteProduct(row.id)" type="button">
              <div class="container-icon">
                <font-awesome-icon :icon="['fas', 'trash']" class="icon-size" />
                Excluir
              </div>
            </button>
          </div>
        </template>
      </TableDisplay>
    </div>
  </div>
</template>

<script>
import TableDisplay from '../../components/TableDisplay.vue'

export default {
  components: {
    TableDisplay
  },
  data() {
    return {
      tableHeaders: [
        { key: 'name', label: 'Nome' },
        { key: 'active', label: 'Status' },
        { key: 'actions', label: 'Ações' }
      ],
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

.header,
.body {
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
</style>
