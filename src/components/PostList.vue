<script setup>
import { onMounted, watch, ref } from 'vue';
import PostItem from './PostItem.vue';
import {usePosts} from '@/api/boardApi.js';

const props = defineProps({
  category: String,
});

const { posts, getMore, loading, addPost } = usePosts();

onMounted(() => {
  posts.value = []; // 초기화 후 로딩
  getMore(props.category);
});

// 최신 글을 맨 위에 추가
const handleSubmit = (content) => {
  if (content.trim()) {
    const newPost = {
      id: Date.now(), // temporary local ID
      author: '작성자',
      content,
    };
    posts.value.unshift(newPost);
    addPost(newPost);
  }
};

</script>

<template>
  <!-- <section class="flex flex-col-reverse md:col-span-2 lg:col-span-3">
    <div
      v-for="post in posts"
      :key="post.id"
      class="rounded-lg shadow-sm"
    >
      <PostItem :post="post" />
    </div>

    <div class="md:col-span-2 lg:col-span-3">
      <PostInput @submit="handleSubmit" />
    </div>
  </section> -->

<div class="flex flex-col h-screen">
  <!-- 상단: 네비/카테고리 등 -->
  <div class="flex flex-row h-full">
    <!-- 메인 콘텐츠 -->
    <div class="flex flex-col flex-1">
      <!-- 스크롤 가능한 포스트 목록 -->
      <main class="flex-1 overflow-y-auto p-4">
        <div v-for="post in posts" :key="post.id" class="rounded-lg shadow-sm">
          <PostItem :post="post" />
        </div>
      </main>

      <!-- 고정 입력창 -->
      <div class="p-4 md:col-span-2 lg:col-span-3">
        <PostInput @submit="handleSubmit" />
      </div>
    </div>
  </div>
</div>

</template>
<style>
</style>