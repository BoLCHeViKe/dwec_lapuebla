<script setup>
import { reactive } from 'vue';
let asig="";
const milista = reactive(["Cliente","Servidor"]);
//Mi script
function agregarAsig(){
    if (asig.trim()!="") {
        if (milista.findIndex((element)=> element.toLowerCase()===asig.toLowerCase())===-1) {
            milista.push(asig);
            asig="";        
        }
    }

}
const resetList = () => {
    milista.length = 0; 
};

</script>
<template>
    <h2>Mi testeo de lista</h2>
    <input v-model="asig" type="text" placeholder="Escribe asignatura"></input>
    <button @click="agregarAsig()" >Guardar</button>
    <button @click="resetList" >Limpiar Lista</button>
    <ul>
        <li v-for="(asignatura, index) in milista" :key="index">{{ index+1 }} - {{ asignatura }}</li>
    </ul>
    <!-- mi html -->
    <!-- crear input y luego boton para añadir a la lista -->
</template>
<style scoped>
/* Mis estilos globales*/
</style>
