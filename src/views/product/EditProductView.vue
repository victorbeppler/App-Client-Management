<template>
  <div class="page-edit-product">
    <div class="wrapper-edit-product">
      <h2>Editar Produto</h2>
      <form @submit.prevent="submitForm" class="form">
        <div class="field">
          <label for="customerName">Nome</label>
          <input id="customerName" v-model="product.name" type="text" required class="input" />
        </div>
        <div class="fieldStatus">
          <label for="customerActive">Ativo:</label>
          <input
            id="customerActive"
            v-model="product.active"
            type="checkbox"
            class="checkbox-button"
          />
        </div>

        <div class="containerSaveButton">
          <button class="buttonSave" type="submit">Salvar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        id: null,
        name: '',
        active: false
      }
    }
  },
  methods: {
    loadProduct() {
      const productId = this.$route.params.id
      const products = JSON.parse(localStorage.getItem('products')) || []
      const productToEdit = products.find((product) => product.id === parseInt(productId))
      if (productToEdit) {
        this.product = { ...productToEdit }
      }
    },
    removeProduct(productId) {
      this.product.products = this.product.products.filter((product) => product.id !== productId)
    },
    submitForm() {
      const products = JSON.parse(localStorage.getItem('products')) || []
      const index = products.findIndex((product) => product.id === this.product.id)
      if (index !== -1) {
        products[index] = { ...this.product }
        localStorage.setItem('products', JSON.stringify(products))
        this.$router.push('/products')
      }
    }
  },
  mounted() {
    this.loadProduct()
  }
}
</script>

<style>
.page-edit-product {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper-edit-product {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

.checkbox-button {
  width: 1.2rem;
  height: 1.2rem;
}

.fieldStatus {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
}

.buttonSave:hover {
  background-color: #333;
}

.input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.containerSaveButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
}
</style>
