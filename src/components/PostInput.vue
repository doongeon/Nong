<script setup>
import { ref } from 'vue';
const emit = defineEmits(['submit']);
const text = ref('');

const onSubmit = (e) => {
  e.preventDefault();
  if (!text.value.trim()) return;
  console.log('제출:', text.value);
  emit('submit', text.value.trim());
  text.value = '';
};
</script>
<template>
  <div class="w-full flex flex-col justify-end">
   
    <div class="relative w-full max-w-3xl mx-auto">
      <textarea
        v-model="text"
        placeholder="새 글을 작성하세요…"
        @keydown.ctrl.enter="onSubmit"
        class="w-full min-h-48 rounded-lg resize-none border border-gray-300 dark:border-gray-700/20 p-4  resize-none dark:bg-white/10 bg-black/20 text-gray-900 dark:text-white"
      ></textarea>
      <button
        type="button"
        @click="onSubmit"
        class="absolute bottom-4 right-4 bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded shadow transition-colors duration-200"
      >
        등록
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>

