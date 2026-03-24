<script setup>
import { ref } from 'vue'

const lenguajes = ref(['JavaScript', 'Python', 'Java', 'PHP'])
</script>

<template>
  <h2>4. Listas (v-for)</h2>

  <div class="caja">
    <ul>
      <li v-for="(lenguaje, index) in lenguajes" :key="index">{{ index + 1 }} - {{ lenguaje }}</li>
    </ul>
  </div>
</template>
