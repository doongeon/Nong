<template>
  <nav id="nav" class="flex bg-green-800 py-5 px-5 text-green-50 text-base">
    <div class="flex gap-5 mx-auto">
      <RouterLink :to="{ name: 'home' }">홈</RouterLink>
      <RouterLink :to="{ name: 'login' }">login test</RouterLink>
      <RouterLink :to="{ name: 'board/detail', params: { id: 1 } }">board/detail test</RouterLink>
    </div>
  </nav>
</template>

<script setup></script>
