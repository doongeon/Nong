<script setup>
import { ref } from 'vue';
import {usePosts} from '@/api/boardApi.js';
import NavBar from '../components/layouts/NavBar.vue';
import PostList from '@/components/PostList.vue'
import PostItem from '@/components/PostItem.vue'
import PostInput from '@/components/PostInput.vue';

const categories = ['전체', '재능기부', '농작물', 'Q&A', '자유', '마을소식']
const selectedCategory = ref('전체')

const {addPost, loading} = usePosts();

const handleSubmit = (content) => {
  addPost(content);
};

</script>

<template>
  <div class="flex flex-col md:flex-row h-screen">
    <!-- Sidebar -->
    <NavBar
      class="w-full md:w-[200px] p-4 border-b md:border-b-0 md:border-r border-gray-300"
      :categories="categories"
      v-model:selectedCategory="selectedCategory"
    />

    <!-- Main Content -->
    <main class="flex-1 p-4 overflow-y-auto">
      <PostList :category="selectedCategory" />
      <PostInput @submit.prevent="handleSubmit" />

      <section class="mt-4 space-y-4" >
        <PostItem
          v-for="post in posts"
          :key="post.id"
          :post="post"
        />
        <div class="text-center py-2">
          <span v-if="loading">로딩 중…</span>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>

</style>
