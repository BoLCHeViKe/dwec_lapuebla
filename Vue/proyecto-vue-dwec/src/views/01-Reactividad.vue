<script setup>
import { ref, reactive } from 'vue'
const contador = ref(0)
const usuario = reactive({ nombre: 'Alumno', edad: 20 })

function incrementarEdad(){
    usuario.edad++;
}
</script>
<template>
  <h2>1. Reactividad (ref vs reactive)</h2>
  <div class="caja">
    <p>Contador (ref): {{ contador }}</p>
    <button @click="contador++">Sumar</button>
    <hr>
    <p>Usuario (reactive): {{ usuario.nombre }} - {{ usuario.edad }} años</p>
    <button @click="incrementarEdad">Cumplir año</button>
  </div>
</template>
