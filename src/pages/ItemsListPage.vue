<script setup>
const items = [
  { id: 1, title: "Стаття 1", description: "Короткий опис" },
  { id: 2, title: "Стаття 2", description: "Ще один опис" },
  { id: 3, title: "Стаття 3", description: "Щось цікаве" }
]
</script>

<template>
  <div>
    <h2>Catalog</h2>
    <ul>
      <li v-for="item in items" :key="item.id">
        <router-link :to="`/items/${item.id}`">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>