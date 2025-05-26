<script setup>
import { ref, computed, watchEffect } from 'vue'

const firstName = ref('')
const lastName = ref('')
const nameColor = ref('gray')

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`.trim()
})

// watchEffect reacciona automáticamente a cualquier cambio usado dentro de su función
watchEffect(() => {
  if (firstName.value && lastName.value) {
    nameColor.value = 'green'
  } else if (firstName.value || lastName.value) {
    nameColor.value = 'orange'
  } else {
    nameColor.value = 'gray'
  }
})
</script>

<template>
  <div>
    <form>
      <div class="name">
        <label for="firstName">Primer Nombre:</label>
        <input v-model="firstName" placeholder="Ingresa primer nombre" />
        <label for="lastName">Primer Apellido:</label>
        <input v-model="lastName" placeholder="Ingresa primer apellido" />
        <p :style="{ color: nameColor }">
          {{ firstName || lastName ? `Bienvenido: ${fullName}` : 'Ingresa tu nombre y apellido' }}
        </p>
      </div>
    </form>
  </div>
</template>

<style scoped>
.name {
  display: flex;
  flex-direction: column;
  width: 300px;
}
.name > input {
  border: solid black;
}
html.dark .name > input {
  border: solid white;
}
</style>
