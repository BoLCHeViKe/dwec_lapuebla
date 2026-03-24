<script setup>
const saludar = (nombre) => alert(`¡Hola ${nombre}!`)

const enviarFormulario = () => alert('Formulario enviado sin recargar la página')
</script>

<template>
  <h2>5. Eventos (v-on / @)</h2>

  <div class="caja">
    <button @click="saludar('Clase')">Saludar</button>

    <hr />

    <form @submit.prevent="enviarFormulario">
      <button type="submit">Enviar Formulario (prevent)</button>
    </form>
  </div>
</template>
