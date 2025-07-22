 <!--HELP “width 767px 넘어가는 순간부터 article이 사라진다” -->

<template>
  <router-link
    :to="{ name: 'board/detail', params: { id: post.postId }, query: query }"
    class="block no-underline text-inherit"
  >
    <article
      class="relative max-w-none min-h-28 border-b border-gray-300 px-4 py-6 overflow-hidden hover:bg-gray-100/60 w-full mx-auto h-auto"
    >
      <header
        class="absolute top-7 left-4 lg:left-8 text-sm text-gray-400 font-bold mb-4"
      >
        {{ post.userId }}
      </header>
      <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3 pl-6 lg:pl-8">
        {{ post.title }}
      </h2>
      <!-- 본문 -->
      <div class="flex items-start pl-4  lg:pl-8 pr-4">
        <p
          class="font-mono text-base  text-left text-gray-800 dark:text-gray-100 leading-relaxed"
        >
          {{ post.content }}
        </p>
      </div>

      <!-- 태그 + 좋아요 -->
      <div class="mt-4 pl-4  lg:pl-8 pr-4 flex items-center justify-between flex-wrap gap-3">
        <div class="flex gap-2 flex-wrap">
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="text-xs bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-300 px-2 py-1 rounded-full"
          >
            #{{ tag }}
          </span>
        </div>
        <button
          type="button"
          @click.stop="likes++"
          class="text-sm text-pink-500 hover:text-pink-600 transition-colors duration-200"
        >
          🩷 {{ likes }}
        </button>
      </div>
    </article>
  </router-link>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const cr = useRoute();
const likes = ref(0);

defineProps({
  post: Object,
  query: Object,
});
</script>
