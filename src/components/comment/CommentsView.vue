<template>
  <div v-if="comments.length > 0">
    <div v-for="(comment, i) in comments" :key="comment.commentId" class="py-4">
      <div class="flex flex-row items-center justify-between px-2">
        <div class="flex flex-row">
          <div
            :class="`size-8 rounded-full mr-3 ${gradientClasses[(postId + i) % gradientClasses.length]}`"
          ></div>
          <div class="flex flex-col">
            <span class="font-bold text-sm">{{ comment.writer }}</span>
            <p class="whitespace-pre-wrap text-sm">
              {{ comment.content }}
            </p>
          </div>
        </div>
        <div>
          <span class="text-gray-500 text-sm">{{ new Date().toLocaleDateString() }}</span>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <slot></slot>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const { postId } = defineProps({ postId: String });
const comments = ref([
  { writer: '1', content: 'test', date: '' },
  { writer: '2', content: 'test', date: '' },
  { writer: '3', content: 'test', date: '' },
  { writer: '4', content: 'test', date: '' },
]);
const gradientClasses = [
  'bg-gradient-to-r from-purple-500 to-pink-500',
  'bg-gradient-to-br from-blue-400 to-green-300',
  'bg-gradient-to-tl from-yellow-300 via-red-400 to-purple-500',
  'bg-gradient-to-b from-indigo-600 to-purple-700',
  'bg-gradient-to-tr from-green-400 to-blue-500',
  'bg-gradient-to-l from-red-500 to-orange-500',
  'bg-gradient-to-r from-cyan-400 to-sky-600',
  'bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500',
  'bg-gradient-to-br from-teal-400 to-emerald-500',
  'bg-gradient-to-tr from-violet-500 to-pink-400',
  'bg-gradient-to-b from-orange-300 to-rose-500',
  'bg-gradient-to-tl from-sky-400 to-blue-700',
  'bg-gradient-to-r from-amber-300 via-orange-400 to-red-500',
  'bg-gradient-to-bl from-emerald-400 to-lime-300',
  'bg-gradient-to-tr from-zinc-700 to-stone-500',
  'bg-gradient-to-t from-blue-900 via-indigo-700 to-purple-700',
];

const load = async () => {
  // comments.value = await getComments(postId);
};

defineExpose({
  load,
});

onMounted(() => {
  load();
});
</script>
