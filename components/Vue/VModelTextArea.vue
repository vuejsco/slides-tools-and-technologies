<script setup>
import { ref } from 'vue'

const message = ref('')
</script>

<template>
  <span>Mensaje multilinea es</span>
  <p style="white-space: pre-line;">{{ message }}</p>
  <textarea v-model="message" placeholder="Agrega multiple lineas"></textarea>
</template>
