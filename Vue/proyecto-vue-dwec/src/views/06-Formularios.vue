<script setup>
import { ref } from 'vue'

const texto = ref('')

const acepto = ref(false)
</script>

<template>
  <h2>6. Formularios (v-model)</h2>

  <div class="caja">
    <input v-model="texto" placeholder="Escribe algo..." />

    <p>Has escrito: {{ texto }}</p>

    <hr />

    <label> <input type="checkbox" v-model="acepto" /> Acepto los términos </label>

    <p>Estado del checkbox: {{ acepto }}</p>
  </div>
</template>
