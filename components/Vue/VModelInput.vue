<script setup>
import { ref } from 'vue'

const message = ref('')
</script>

<template>
  <p>Mensaje es: {{ message }}</p>
  <input v-model="message" placeholder="Editame" />
</template>
