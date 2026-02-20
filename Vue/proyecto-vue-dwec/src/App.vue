<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="contenedor">
    <header>
      <h1>Guía DWEC: Vue 3</h1>
      <nav>
        <RouterLink to="/01-reactividad">1. Reactividad</RouterLink>
        <RouterLink to="/02-directivas">2. Directivas</RouterLink>
        <RouterLink to="/03-condicionales">3. Condicionales</RouterLink>
        <RouterLink to="/04-listas">4. Listas</RouterLink>
        <RouterLink to="/05-eventos">5. Eventos</RouterLink>
        <RouterLink to="/06-formularios">6. Formularios</RouterLink>
        <RouterLink to="/07-computadas">7. Computadas</RouterLink>
        <RouterLink to="/08-watchers">8. Watchers</RouterLink>
        <RouterLink to="/09-ciclovida">9. Ciclo de Vida</RouterLink>
        <RouterLink to="/10-comunicacion">10. Comunicación</RouterLink>
        <RouterLink to="/11-myList">11. Mi Lista</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
/* Estilos globales básicos */
body {
  font-family: Arial, sans-serif;
  background: #f4f4f9;
  margin: 0;
  padding: 20px;
}
.contenedor {
  max-width: 800px;
  margin: auto;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  border-bottom: 2px solid #42b883;
  padding-bottom: 10px;
}
nav a {
  text-decoration: none;
  padding: 5px 10px;
  background: #eee;
  color: #333;
  border-radius: 4px;
}
nav a.router-link-active {
  background: #42b883;
  color: white;
}
h2 {
  color: #35495e;
}
.caja {
  border: 1px solid #ddd;
  padding: 15px;
  margin-top: 10px;
  border-radius: 5px;
}
</style>
