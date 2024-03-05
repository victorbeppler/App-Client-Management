<template>
  <div class="page-create-product">
    <div class="wrapper-edit-product">
      <h2>Criar Produto</h2>
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
        id: '',
        name: '',
        active: true
      }
    }
  },
  methods: {
    submitForm() {
      let products = JSON.parse(localStorage.getItem('products')) || []
      const newProduct = { ...this.product, id: Date.now() }
      products.push(newProduct)
      localStorage.setItem('products', JSON.stringify(products))
      this.resetForm()
      this.$router.push('/products')
    },
    resetForm() {
      this.product = { name: '', active: true, id: '' }
    }
  }
}
</script>

<style>
.page-create-product {
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
