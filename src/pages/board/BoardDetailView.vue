<template>
  <div class="max-w-3xl mx-auto mt-10 px-5">
    <div class="flex flex-row justify-between">
      <div class="flex flex-col ml-5">
        <span class="font-bold text-lg">{{ board.title }}</span>
        <span class="text-xs text-gray-400">{{ new Date().toLocaleDateString() }}</span>
      </div>
    </div>

    <div
      class="max-w-lg w-max rounded-2xl overflow-hidden border border-gray-200 mx-auto mt-5 shadow-lg"
    >
      <img src="https://picsum.photos/400/400" />
    </div>
    <div class="mt-3">
      <div class="w-full mt-5 whitespace-pre-wrap">{{ board.content }}</div>
      <div class="mt-5 font-bold text-sm p-1">
        <i class="fa-regular fa-heart fa-lg"></i> <span>{{ board.likes }}</span>
        <i class="fa-regular fa-eye fa-lg ml-5"></i> <span>{{ board.views }}</span>
      </div>
    </div>

    <form
      @submit.prevent="handleSubmit"
      class="border-t border-t-gray-400 mt-5 pt-10 flex flex-row justify-center items-center px-5"
    >
      <div class="flex flex-row items-center">
        <div
          :class="`size-8 rounded-full mr-3 ${gradientClasses[postId % gradientClasses.length]}`"
        ></div>
        <textarea
          class="min-w-xs max-w-md h-[80px] border-b border-gray-500 resize-none focus:outline-none px-1"
          type="text"
          id="content"
          v-model="commentForm.content"
        ></textarea>
      </div>
      <button
        type="submit"
        class="ml-5 cursor-pointer bg-orange-500 size-8 rounded-2xl hover:opacity-80 transition"
      >
        <i class="fa-solid fa-arrow-up text-orange-50"></i>
      </button>
    </form>

    <div class="mt-10">
      <CommentsView :post-id="postId" ref="commentsViewRef">
        <p class="text-gray-500 text-center py-8 mt-10">
          아직 댓글이 없습니다. 첫 댓글을 남겨주세요!
        </p>
      </CommentsView>
    </div>
  </div>
</template>

<script setup>
import CommentsView from '@/components/comment/CommentsView.vue';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const postId = route.params.id;

const board = reactive({
  title: '제목입니다',
  writer: '주인장',
  thumbnailUrl: '',
  content: `🌅 아침
오늘도 6시 30분에 알람 소리와 함께 눈을 떴다.
평소처럼 물 한 잔을 마시고, 가볍게 스트레칭을 했다. 요즘은 모닝 루틴이 어느 정도 자리잡힌 느낌이다.

"작은 루틴이 하루의 리듬을 만든다." 라는 말을 떠올리며,
계란 두 개와 방울토마토, 그리고 삶은 닭가슴살로 간단한 아침을 먹었다.

💻 오전 — 개발과 커피
노트북을 열고, 어제 작업하던 Vue 컴포넌트를 다시 살펴봤다.
TailwindCSS와 Markdown 렌더링을 예쁘게 다듬는 데 시간을 좀 썼다.

Tailwind Typography 플러그인을 적용했고
prose 클래스로 마크다운 내용을 렌더링
v-html로 동적 content를 삽입하되, 보안 때문에 DOMPurify도 고민 중이다
카페인도 채워야 하기에, 아메리카노 한 잔을 내려 마셨다.
역시 집에서 마시는 첫 커피가 가장 좋다.
`,
  likes: '123',
  views: '14123',
});

const commentForm = reactive({
  content: '',
});

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
</script>
