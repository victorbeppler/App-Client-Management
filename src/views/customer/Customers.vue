<template>
  <div class="wrapper">
    <table>
      <caption>
        Lista de Clientes
      </caption>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Documento</th>
          <th>Email</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.name }}</td>
          <td>{{ customer.document }}</td>
          <td>{{ customer.email }}</td>
          <td>
            <div v-if="customer.active">
              <div class="circleActive" />
              Ativo
            </div>
            <div v-else>
              <div class="circleRed" />
              Inativo
            </div>
          </td>
          <td>
            <button class="btn btn-edit" @click="editCustomer(customer.id)">Editar</button>
            <button class="btn btn-delete" @click="deleteCustomer(customer.id)">Excluir</button>
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
      this.$router.push({
        name: 'edit-customer',
        params: {
          id: customerId
        }
      })
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
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
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
</style>
