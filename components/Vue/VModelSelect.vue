<script setup>
import { ref } from 'vue'

const selected = ref([])
</script>

<template>
  <div>Seleccionaste: {{ selected }}</div>

  <select v-model="selected" multiple>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
</template>

<style>
select[multiple] {
  width: 100px;
}
</style>
