<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mensaje = ref('Cargando...')

onMounted(() => {
  setTimeout(() => {
    mensaje.value = '¡Componente Montado! Datos simulados cargados.'
  }, 2000)
})

onUnmounted(() => {
  console.log('El componente se ha destruido (cambiaste de página)')
})
</script>

<template>
  <h2>9. Ciclo de Vida (onMounted)</h2>

  <div class="caja">
    <p>{{ mensaje }}</p>
  </div>
</template>
