<script setup>
import { reactive } from 'vue'
let asig = ''
const milista = reactive(['Cliente', 'Servidor'])
//Mi script
function agregarAsig() {
  if (asig.trim() != '') {
    if (milista.findIndex((element) => element.toLowerCase() === asig.toLowerCase()) === -1) {
      milista.push(asig)
      asig = ''
    }
  }
}
function deleteElemlist(itemAEliminar) {
  const index = milista.findIndex((item) => item.toLowerCase() === itemAEliminar.toLowerCase())
  milista.splice(index, 1)
}
const resetList = () => {
  milista.length = 0
}
</script>
<template>
  <h2>Mi testeo de lista</h2>
  <input @keyup.enter="agregarAsig()" v-model="asig" type="text" placeholder="Escribe asignatura" />
  <button @click="agregarAsig()">Guardar</button>
  <button @click="resetList">Limpiar Lista</button>
  <ol>
    <li v-for="(asignatura, index) in milista" :key="index">
     {{ asignatura }}<button @click="deleteElemlist(asignatura)">X</button>
    </li>
  </ol>
  <!-- mi html -->
  <!-- crear input y luego boton para añadir a la lista -->
</template>
<style scoped>
/* Mis estilos globales*/
</style>
