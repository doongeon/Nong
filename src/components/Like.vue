<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const likes = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="likes++"> 🩷 {{ likes }}</button>

  </div>

</template>

<style scoped>

</style>
