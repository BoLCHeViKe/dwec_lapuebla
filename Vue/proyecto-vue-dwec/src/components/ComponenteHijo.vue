<script setup>
// Props: Los parámetros que recibimos de arriba

defineProps({
  parametro: String,
})

// Emits: El "return" que enviamos hacia arriba

const emit = defineEmits(['responder'])

const enviarMensaje = () => {
  emit('responder', '¡Hola Papá! He recibido tu prop.')
}
</script>

<template>
  <div style="border: 1px dashed blue; padding: 10px">
    <p>Soy el Hijo. Mi prop es: {{ parametro }}</p>

    <button @click="enviarMensaje">Enviar respuesta al Padre</button>
  </div>
</template>
