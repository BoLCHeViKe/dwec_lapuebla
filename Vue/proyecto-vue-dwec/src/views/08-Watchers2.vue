<script setup>
import { ref,watch } from "vue";
const saldo = ref(100)
const resumen = ref("")
watch(saldo, (nuevo, antiguo)=>{
    if (nuevo < 0) {
        resumen.value = "¡Error! No puedes tener saldo negativo."        
    } else if (nuevo<antiguo) {
        resumen.value = `Has gastado: ${antiguo-nuevo}`
    } else if (nuevo>antiguo) {
        resumen.value = `Has ingresado: ${nuevo-antiguo}`
    }else {
        resumen.value = "Te has quedado igual!"
    }
}



)

</script>
<template>
      <h2>8. Observadores 2 (watch)</h2>
      <input v-model="saldo" type="number">
      <p>{{ resumen }}</p>
</template>