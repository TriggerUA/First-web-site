<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id

const items = [
  { id: "1", title: "Стаття 1", content: "Повний текст статті 1" },
  { id: "2", title: "Стаття 2", content: "Повний текст статті 2" },
  { id: "3", title: "Стаття 3", content: "Повний текст статті 3" }
]

const item = items.find(i => i.id === id)
</script>

<template>
  <div v-if="item">
    <h2>{{ item.title }}</h2>
    <p>{{ item.content }}</p>
  </div>
  <div v-else>
    <p>Елемент не знайдено.</p>
  </div>
</template>