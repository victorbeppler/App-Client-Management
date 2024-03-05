<template>
  <div class="page-edit-customer">
    <div class="wrapper-edit-customer">
      <h2>Editar Cliente</h2>
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
        <SelectProductModal
          v-if="showProductModal"
          :selectedProducts="selectedProducts"
          @close-modal="handleModalClose"
          @select-product="addProductToSelected"
        />

        <div class="containerSaveButton">
          <button class="buttonSave" type="submit">Salvar</button>
        </div>
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
      customer: {
        id: null,
        name: '',
        document: '',
        email: '',
        phone: '',
        active: false,
        products: []
      }
    }
  },
  methods: {
    loadCustomer() {
      const customerId = this.$route.params.id
      const customers = JSON.parse(localStorage.getItem('customers')) || []
      const customerToEdit = customers.find((customer) => customer.id === parseInt(customerId))
      if (customerToEdit) {
        this.customer = { ...customerToEdit }
      }
    },
    removeProduct(productId) {
      this.customer.products = this.customer.products.filter((product) => product.id !== productId)
    },
    submitForm() {
      const customers = JSON.parse(localStorage.getItem('customers')) || []
      const index = customers.findIndex((customer) => customer.id === this.customer.id)
      if (index !== -1) {
        customers[index] = { ...this.customer }
        localStorage.setItem('customers', JSON.stringify(customers))
        this.$router.push('/customers')
      }
    }
  },
  mounted() {
    this.loadCustomer()
  }
}
</script>

<style>
.page-edit-customer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper-edit-customer {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
}
.buttonSave {
  width: 200px;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

.buttonSave:hover {
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

.containerSaveButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
}
</style>
