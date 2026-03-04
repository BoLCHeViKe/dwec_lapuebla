<script setup> 
import { ref } from 'vue' 
const mostrarIf = ref(true) 
const mostrarShow = ref(true) 
</script> 
<template> 
  <h2>3. Condicionales (v-if vs v-show)</h2> 
  <div class="caja"> 
    <button @click="mostrarIf = !mostrarIf">Alternar v-if</button> 
    <p v-if="mostrarIf">v-if: Me destruyo del DOM si soy falso.</p> 
    <hr> 
    <button @click="mostrarShow = !mostrarShow">Alternar v-show</button> 
    <p v-show="mostrarShow">v-show: Solo me ocultan con CSS (display: none).</p> 
  </div> 
</template>
<style scoped>
/* Mis estilos globales*/
</style>