<script setup>
import { ref } from 'vue'

import ComponenteHijo from '../components/ComponenteHijo.vue'

const mensajeDelHijo = ref('Esperando mensaje...')

const manejarEvento = (valorDevuelto) => {
  mensajeDelHijo.value = valorDevuelto
}
</script>

<template>
  <h2>10. Comunicación (Props y Emits)</h2>

  <div class="caja">
    <p>
      Mensaje recibido: <strong>{{ mensajeDelHijo }}</strong>
    </p>

    <hr />

    <ComponenteHijo parametro="Datos desde el Padre" @responder="manejarEvento" />
  </div>
</template>
