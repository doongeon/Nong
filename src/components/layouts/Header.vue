<script setup>
import config from '@/config';

</script>

<template>
<div class="w-full px-8 text-content bg-orange-500 text-gray-800 dark:bg-orange-600 dark:text-white"> 
    <h1 class="text-2xl font-bold mb-2">{{ config.title }}</h1>
    <p class="text-base">{{ config.subtitle }}</p>
</div>
</template>

<style scoped>

</style>