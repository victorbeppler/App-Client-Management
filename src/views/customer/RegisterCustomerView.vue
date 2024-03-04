<template>
  <div class="container">
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
      <button class="buttonRegister" type="submit">Cadastrar Cliente</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customer: {
        name: '',
        document: '',
        email: '',
        phone: '',
        active: true
      }
    }
  },
  methods: {
    submitForm() {
      let customers = JSON.parse(localStorage.getItem('customers')) || []
      const newCustomer = { ...this.customer, id: Date.now() }
      customers.push(newCustomer)
      localStorage.setItem('customers', JSON.stringify(customers))
      console.log('Cliente cadastrado:', newCustomer)
      this.resetForm()
    },
    resetForm() {
      this.customer = { name: '', document: '', email: '', phone: '', active: true }
    }
  }
}
</script>
