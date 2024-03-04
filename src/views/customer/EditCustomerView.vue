<template>
  <div class="container">
    <h2>Editar Cliente</h2>
    <form @submit.prevent="updateCustomer" class="form">
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
      <button class="buttonRegister" type="submit">Cadastrar Cliente</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customer: {
        id: null,
        name: '',
        document: '',
        email: '',
        phone: '',
        active: false
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
    updateCustomer() {
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
