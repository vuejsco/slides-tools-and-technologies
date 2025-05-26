<script setup>
const message = "Hello, Vue 3!";
const count = 0;

// Función auxiliar para mostrar fecha actual
function formatDate(date) {
  return date.toISOString();
}
</script>

<template>
  <p>{{ message + "AltSchool" }} - <span>message + 'AltSchool'</span></p>
  <!-- Métodos de strings -->
  <p>{{ message.toUpperCase() }} - <span>message.toUpperCase()</span></p>
  <p>{{ message.repeat(3) }} - <span>message.repeat(3)</span></p>
  <p>
    {{ message + "AltSchool".toUpperCase() }} -
    <span>message + 'AltSchool'.toUpperCase()</span>
  </p>
  <!-- Operador ternario -->
  <p>
    Cart: {{ count }} {{ count > 1 ? "items" : "item" }}

    <span>Cart: - count - count > 1 ? "items" : "item" </span>
  </p>
  <!-- Llamado de función definida en script -->
  <p>
    Current time: {{ formatDate(new Date()) }} -
    <span>formatDate(new Date())</span>
  </p>
</template>

<style scoped>
span {
  color: red;
}
</style>
