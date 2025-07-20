<script setup>
defineProps({
  post: Object,
});
</script>

<template>
  <router-link
    :to="{ name: 'post-detail', params: { id: post.id } }"
    class="block no-underline text-inherit"
  >
    <article
      class=" relative min-h-28 border-b border-gray-300 px-4 py-6 overflow-hidden hover:bg-gray-100/60 w-full max-w-full md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto h-auto"
    >
      <header class="absolute top-4 left-4 md:left-6 lg:left-8 text-sm text-gray-400 font-bold mb-4">
        {{ post.author }}
      </header>

      <div class="items-center h-full flex pl-4 mt-7 md:pl-6 lg:pl-8 pr-4">
        <p class="font-mono text-base md:text-lg text-left">
          {{ post.content }}
        </p>
      </div>
    </article>
  </router-link>
</template>