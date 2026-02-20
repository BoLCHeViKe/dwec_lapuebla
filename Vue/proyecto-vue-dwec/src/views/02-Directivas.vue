<script setup>
import { ref } from 'vue'
const urlImagen = ref('https://vuejs.org/images/logo.png')
const estaDeshabilitado = ref(true)
</script>
<template>
  <h2>2. Directivas (v-bind)</h2>
  <div class="caja">
    <p>Atributos dinámicos:</p>
    <img :src="urlImagen" alt="Logo Vue" width="50" />
    <br><br>
    <button :disabled="estaDeshabilitado">Botón bloqueado</button>
    <button @click="estaDeshabilitado = !estaDeshabilitado">Alternar bloqueo</button>
  </div>
</template>
