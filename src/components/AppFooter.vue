<template>
  <footer class="footer">
    <p>© {{ year }} My Vue SPA. All rights reserved.</p>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 15px 0;
  background-color: #f4f4f4;
  border-top: 1px solid #ddd;
  font-size: 14px;
  margin-top: 20px;
}
</style>