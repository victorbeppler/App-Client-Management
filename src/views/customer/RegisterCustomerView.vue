<template>
  <div class="page">
    <div class="wrapper">
      <h2>Cadastro de Cliente</h2>
      <form @submit.prevent="submitForm" class="form">
        <div class="field">
          <label for="customerName">Nome</label>
          <input id="customerName" v-model="customer.name" type="text" required class="input" />
        </div>
        <div class="field">
          <label for="customerDocument">Documento</label>
          <input
            id="customerDocument"
            v-model="customer.document"
            type="text"
            required
            class="input"
          />
        </div>
        <div class="field">
          <label for="customerEmail">Email</label>
          <input id="customerEmail" v-model="customer.email" type="email" required class="input" />
        </div>
        <div class="field">
          <label for="customerPhone">Telefone</label>
          <input id="customerPhone" v-model="customer.phone" type="text" required class="input" />
        </div>
        <div class="fieldStatus">
          <label for="customerActive">Ativo:</label>
          <input id="customerActive" v-model="customer.active" type="checkbox" />
        </div>
        <button class="buttonAddProduct" type="button" @click="showProductModal = true">
          Adicionar Produto
        </button>
        <!-- Lista de Produtos Adicionados -->
        <div v-if="customer.products.length > 0">
          <h3>Produtos Relacionados</h3>

          <table class="tb-products-related">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in customer.products" :key="product.id">
                <td>{{ product.name }}</td>
                <td>{{ product.active ? 'Ativo' : 'Inativo' }}</td>
                <td>
                  <button @click="removeProduct(product.id)" class="btn-remove">
                    <font-awesome-icon :icon="['fas', 'trash']" />
                    Remover
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <SelectProductModal
          v-if="showProductModal"
          :selectedProducts="selectedProducts"
          @close-modal="handleModalClose"
          @select-product="addProductToSelected"
        />

        <button class="buttonRegister" type="submit">Cadastrar Cliente</button>
      </form>
    </div>
  </div>
</template>

<script>
import SelectProductModal from '../../components/SelectProductModal.vue'

export default {
  components: {
    SelectProductModal
  },
  data() {
    return {
      showProductModal: false,
      customer: {
        name: '',
        document: '',
        email: '',
        phone: '',
        active: true,
        products: []
      },
      selectedProducts: []
    }
  },
  methods: {
    handleSelectProduct(product) {
      if (!this.selectedProducts.find((p) => p.id === product.id)) {
        this.selectedProducts.push(product)
      }
    },
    addProductToSelected(product) {
      if (!this.selectedProducts.find((p) => p.id === product.id)) {
        this.selectedProducts.push(product)
      }
    },
    handleModalClose() {
      this.showProductModal = false
      this.customer.products = [...this.selectedProducts]
    },
    submitForm() {
      let customers = JSON.parse(localStorage.getItem('customers')) || []
      const newCustomer = { ...this.customer, id: Date.now() }
      customers.push(newCustomer)
      localStorage.setItem('customers', JSON.stringify(customers))
      this.resetForm()
      this.$router.push('/customers')
    },
    resetForm() {
      this.customer = { name: '', document: '', email: '', phone: '', active: true, products: [] }
    },
    addProduct(product) {
      this.customer.products.push(product)
    },
    removeProduct(productId) {
      this.customer.products = this.customer.products.filter((product) => product.id !== productId)
    }
  }
}
</script>

<style>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 60%;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
}
.buttonRegister {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: grey;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

.buttonRegister:hover {
  background-color: #333;
}

.tb-products-related {
  width: 100%;
  margin-top: 1rem;
  border-collapse: collapse;
}

.btn-remove {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #ff4d4d;
  color: white;
  cursor: pointer;
}

.buttonAddProduct {
  display: block;
  margin: 20px auto 0;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
