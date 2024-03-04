<template>
  <div class="container">
    <h2>Cadastro de Produto</h2>
    <form @submit.prevent="submitForm" class="form">
      <div class="field">
        <label for="productName">Nome</label>
        <input id="productName" v-model="product.name" type="text" required class="input" />
      </div>
      <div class="fieldStatus">
        <label for="productActive">Ativo:</label>
        <input id="productActive" v-model="product.active" type="checkbox" />
      </div>
      <button class="buttonRegister" type="submit">Cadastrar Produto</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: '',
        active: true
      }
    }
  },
  methods: {
    submitForm() {
      let products = JSON.parse(localStorage.getItem('products')) || []
      products.push(this.product)
      localStorage.setItem('products', JSON.stringify(products))
      this.resetForm()
    },
    resetForm() {
      this.product = { name: '', active: true }
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  gap: 1rem;
}
.input {
  width: 100%;
  padding: 4px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.field {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.fieldStatus {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 100%;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.buttonRegister {
  width: 100%;
  padding: 4px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  letter-spacing: 2px;
  outline: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-align: center;
}
</style>
