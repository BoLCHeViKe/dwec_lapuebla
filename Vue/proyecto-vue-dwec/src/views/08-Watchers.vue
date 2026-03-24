<script setup>
import { ref, watch } from 'vue'

const pregunta = ref('')

const respuesta = ref('Hazme una pregunta...')

watch(pregunta, (nuevoValor) => {
  if (nuevoValor.includes('?')) {
    respuesta.value = '¡Buena pregunta! Pero no sé la respuesta.'
  } else {
    respuesta.value = 'Escribe un signo de interrogación al final.'
  }
})
</script>

<template>
  <h2>8. Observadores (watch)</h2>

  <div class="caja">
    <input v-model="pregunta" placeholder="Pregunta algo..." />

    <p>{{ respuesta }}</p>
  </div>
</template>
