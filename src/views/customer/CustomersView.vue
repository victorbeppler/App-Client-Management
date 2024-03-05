<template>
  <div class="wrapper-customers">
    <div class="header">
      <h2>Lista de Clientes</h2>
      <button class="btn btn-add" @click="addCustomer">
        <font-awesome-icon :icon="['fas', 'plus']" />
        Novo Cliente
      </button>
    </div>

    <div class="body">
      <TableDisplay :headers="tableHeaders" :rows="customers">
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
            <button class="btn btn-edit" @click="editCustomer(row.id)" type="button">
              <div class="container-icon">
                <font-awesome-icon :icon="['fas', 'pencil']" class="icon-size" />
                Editar
              </div>
            </button>
            <button class="btn btn-delete" @click="deleteCustomer(row.id)" type="button">
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
        { key: 'document', label: 'Documento' },
        { key: 'email', label: 'Email' },
        { key: 'active', label: 'Status' },
        { key: 'actions', label: 'Ações' }
      ],
      customers: []
    }
  },
  methods: {
    addCustomer() {
      this.$router.push({ name: 'add-customer' })
    },
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
.wrapper-customers {
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

.container-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
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

.icon-size {
  font-size: 12px;
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

.action {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
</style>
