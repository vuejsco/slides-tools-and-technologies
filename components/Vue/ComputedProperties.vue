<script setup>
import { computed, ref } from "vue";

const firstName = ref("");
const lastName = ref("");

const fullName = computed(() => {
  return firstName.value + " " + lastName.value;
});
</script>

<template>
  <div>
    <form>
      <div class="name">
        <label for="firstName">Primer Nombre:</label>
        <input v-model="firstName" placeholder="Ingresa primer nombre" />
        <label for="firstName">Primer Apellido:</label>
        <input v-model="lastName" placeholder="Ingresa primer apellido" />
        <p v-if="firstName || lastName">Bienvenido: {{ fullName }}</p>
        <p v-else>Ingresa tu nombre y apellido</p>
      </div>
    </form>
  </div>
</template>

<style scoped>
.name {
  display: flex;
  flex-direction: column;
  width: 300px;
  & > input {
    border: solid black;
  }
  html.dark & > input {
    border: solid white;
  }
}

p {
  color: darkblue;
}
</style>
