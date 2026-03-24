<script setup>
import { ref, computed } from 'vue'

const precio = ref(100)

const iva = computed(() => precio.value * 0.21)

const total = computed(() => precio.value + iva.value)
</script>

<template>
  <h2>7. Propiedades Computadas</h2>

  <div class="caja">
    <input type="number" v-model="precio" />

    <p>Precio base: {{ precio }}€</p>

    <p>IVA (21%): {{ iva }}€</p>

    <p>
      <strong>Total: {{ total }}€</strong>
    </p>
  </div>
</template>
