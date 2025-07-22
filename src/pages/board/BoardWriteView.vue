<template>
  <div class="max-w-3xl mx-auto mt-10 px-5">
    <div>
      <div class="px-2">
        <div class="py-3 px-2">
          <select
            id="category"
            name="category"
            class="mr-5 border border-gray-300 w-40 px-1 py-1 text-sm"
            v-model="form.category"
          >
            <option value="category" selected>카테고리</option>
            <option value="apple">사과</option>
            <option value="banana">바나나</option>
            <option value="orange">오렌지</option>
          </select>
        </div>
        <div class="mt-3 mb-3">
          <input
            class="font-bold text-2xl focus:outline-none px-3 w-full"
            type="text"
            placeholder="제목"
            v-model="form.title"
          />
        </div>
      </div>
      <div class="py-3 border-t border-t-gray-200 flex justify-end">
        <div class="cursor-pointer mr-3">
          <label class="text-sm cursor-pointer" for="file"
            ><i class="fa-solid fa-plus fa-sm cursor-pointer"></i> 파일 추가
            <i class="ml-1 fa-solid fa-file fa-sm text-gray-500 mr-1 cursor-pointer"></i
          ></label>
        </div>
        <input id="file" type="file" hidden />
      </div>
      <div class="mt-10 h-96">
        <QuillEditor theme="snow" v-model:content="form.content" class="border-none" />
      </div>
      <div class="flex flex-row flex-wrap gap-5 text-sm mt-20">
        <div v-for="tag in tags" :key="tag.id">
          {{ tag.tag }}
          <i
            class="fa-solid fa-xmark fa-sm text-gray-500 cursor-pointer"
            @click="handleRemoveTag(tag.id)"
          ></i>
        </div>
        <form @submit.prevent="handleAddTag" class="">
          <input
            type="text"
            class="text-sm focus:outline-none w-full"
            v-model="newTag"
            placeholder="태그 입력"
          />
        </form>
      </div>

      <div class="flex justify-end mt-10">
        <button class="bg-orange-500 text-orange-50 px-3 py-2 rounded-2xl text-sm cursor-pointer">
          생성하기
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const tags = ref([]);
const newTag = ref('');

const form = reactive({
  category: 'category',
  title: '',
  content: '',
  file: [],
});

const handleAddTag = () => {
  tags.value.push({
    tag: newTag.value,
    id: new Date().getTime(),
  });
  newTag.value = '';
};

const handleRemoveTag = (tagId) => {
  tags.value = tags.value.filter((tag) => tag.id != tagId);
};
</script>
