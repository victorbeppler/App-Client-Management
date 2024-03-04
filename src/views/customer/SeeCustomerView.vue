<template>
  <div>
    <table>
      <caption>
        Lista de Clientes
      </caption>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Documento</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.name }}</td>
          <td>{{ customer.document }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.active ? 'Ativo' : 'Inativo' }}</td>
          <td>
            <button @click="editCustomer(customer.id)">Editar</button>
            <button @click="deleteCustomer(customer.id)">Excluir</button>
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
      customers: []
    }
  },
  methods: {
    loadCustomers() {
      this.customers = JSON.parse(localStorage.getItem('customers')) || []
    },
    editCustomer(customerId) {
      // Implemente a lógica de edição aqui
      console.log('Editar cliente:', customerId)
    },
    deleteCustomer(customerId) {
      this.customers = this.customers.filter((customer) => customer.id !== customerId)
      localStorage.setItem('customers', JSON.stringify(this.customers))
    }
  },
  mounted() {
    this.loadCustomers()
  }
}
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  color: white;
}
td {
  color: white;
}
</style>
