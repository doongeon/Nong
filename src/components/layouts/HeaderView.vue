<template>
  <nav id="nav" class="flex bg-green-800 py-5 px-5 text-green-50 text-base">
    <button @click="shootConfetti">
      <i class="fa-solid fa-palette text-lg"></i>
    </button>
    <div class="flex gap-5 mx-auto">
      <RouterLink :to="{ name: 'home' }">홈</RouterLink>
      <RouterLink :to="{ name: 'login' }">login test</RouterLink>
      <RouterLink :to="{ name: 'board/detail', params: { id: 1 } }">board/detail test</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import confetti from 'canvas-confetti';

const shootConfetti = () => {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
  });
};
</script>
