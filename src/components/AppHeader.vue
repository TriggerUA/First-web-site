<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/items">Catalog</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  padding: 15px;
  background: #f5f5f5;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
}
nav a.router-link-active {
  font-weight: bold;
}
</style>