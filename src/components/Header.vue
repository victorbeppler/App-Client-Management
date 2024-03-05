<template>
  <nav class="navbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/" class="nav-link">Clientes</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">Produtos</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MenuApp'
}
</script>

<style>
.navbar {
  background-color: #333;
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding: 1rem;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.navbar-nav {
  list-style: none;
  padding: 0;
}

.nav-item {
  float: left;
}

.nav-link {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
}

.nav-link:hover {
  background-color: #ddd;
  color: black;
}
</style>
