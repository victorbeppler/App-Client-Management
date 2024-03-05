<template>
  <div class="modal">
    <div class="modal-content">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Pesquisar produto..."
        class="field-query"
      />
      <div class="product-list">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in filteredProducts" :key="product.id">
              <td>{{ product.name }}</td>
              <td>
                <span :class="{ circleActive: product.active, circleRed: !product.active }"></span>
                {{ product.active ? 'Ativo' : 'Inativo' }}
              </td>
              <td>
                <button
                  class="btn-add"
                  :disabled="isProductSelected(product)"
                  :class="{ 'btn-disabled': isProductSelected(product) }"
                  @click.stop="selectProduct(product)"
                >
                  {{ isProductSelected(product) ? 'Selecionado' : 'Adicionar' }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button class="closeModal" @click="closeModal">Fechar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedProducts: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      searchQuery: '',
      products: []
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter(
        (product) =>
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
          !this.selectedProducts.some((p) => p.id === product.id)
      )
    }
  },
  methods: {
    selectProduct(product) {
      this.$emit('select-product', product)
    },
    isProductSelected(product) {
      return this.selectedProducts.some((p) => p.id === product.id)
    },
    closeModal() {
      this.$emit('close-modal')
    }
  },
  mounted() {
    const loadedProducts = localStorage.getItem('products')
    if (loadedProducts) {
      this.products = JSON.parse(loadedProducts)
    }
  }
}
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  z-index: 1001;
  display: flex;
  flex-direction: column;
}

.product-list {
  margin-top: 20px;
  overflow-y: auto;
  max-height: 300px;
}

table {
  width: 100%; /* Faz a tabela ocupar a largura total do contêiner */
  border-collapse: collapse; /* Remove espaços entre as células */
}

th,
td {
  text-align: left; /* Alinha o texto à esquerda */
  padding: 8px; /* Adiciona padding para espaço interno */
}

.active {
  color: green;
}

.inactive {
  color: red;
}

.field-query {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.btn-add {
  padding: 10px 20px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.closeModal {
  display: block;
  margin: 20px auto 0;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-added {
  background-color: grey;
  color: #ccc;
}

.closeModal:hover {
  background-color: #0056b3;
}
</style>
