<template>
  <div class="max-w-3xl mx-auto mt-10 px-5">
    <div>
      <div class="py-2 flex flex-row justify-between">
        <div>
          <span class="text-gray-500 mr-1">카테고리</span>
          <span class="font-bold text-lg">{{ board.title }}</span>
        </div>
      </div>
      <div class="py-2 flex flex-row justify-between border-t border-t-gray-200 items-center">
        <div>
          <i class="fa-solid fa-user text-gray-500 mr-1 fa-sm"></i>
          <span class="text-sm">김농부</span>
        </div>
        <span class="text-xs text-gray-400">{{ new Date().toLocaleDateString() }}</span>
      </div>
      <div class="py-2 border-t border-t-gray-200">
        <i class="fa-regular fa-eye fa-xs text-gray-500 mr-1"></i>
        <span class="text-sm">{{ board.views }}</span>
      </div>
      <div class="py-2 border-t border-t-gray-200 border-b border-b-gray-200">
        <i class="ml-1 fa-solid fa-file fa-sm text-gray-500 mr-1"></i>
        <span class="text-sm">{{ '파일' }}</span>
      </div>
    </div>

    <div
      class="max-w-lg w-max rounded-2xl overflow-hidden border border-gray-200 mx-auto mt-5 shadow-lg"
    >
      <img src="https://picsum.photos/400/400" />
    </div>
    <div class="mt-3">
      <div class="w-full mt-5 whitespace-pre-wrap">{{ board.content }}</div>
      <div class="flex justify-center gap-10 mt-10">
        <button class="bg-orange-500 text-orange-50 w-24 h-10 rounded-2xl">목록으로</button>
        <router-link :to="{ name: 'board/write' }"
          ><button
            class="bg-orange-500 text-orange-50 w-24 h-10 rounded-2xl hover:opacity-50 cursor-pointer"
          >
            수정하기
          </button></router-link
        >
        <button class="bg-orange-500 text-orange-50 w-24 h-10 rounded-2xl">삭제하기</button>
      </div>
    </div>
    <div class="border-t border-b border-gray-200 py-5 mt-5">
      <CommentsView :post-id="postId" ref="commentsViewRef">
        <p class="text-gray-500 text-center py-8 mt-10">
          아직 댓글이 없습니다. 첫 댓글을 남겨주세요!
        </p>
      </CommentsView>
    </div>

    <form
      @submit.prevent="handleSubmit"
      class="pt-10 flex flex-row justify-center items-center px-5"
    >
      <div class="w-full">
        <div class="flex flex-row">
          <input
            class="border border-gray-300 mr-5 px-2 py-1 rounded-lg"
            type="text"
            placeholder="작성자"
          />
          <input
            class="border border-gray-300 px-2 py-1 rounded-lg"
            type="text"
            placeholder="비밀번호"
          />
        </div>
        <textarea
          class="mt-5 w-full h-[80px] border border-gray-200 rounded-lg px-2 py-1 resize-none focus:outline-none px-1"
          type="text"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          id="content"
          v-model="commentForm.content"
        ></textarea>
      </div>
      <button
        type="submit"
        class="ml-5 cursor-pointer bg-orange-500 size-8 rounded-full hover:opacity-80 transition"
      >
        <i class="fa-solid fa-arrow-up text-orange-50"></i>
      </button>
    </form>
    <div class="flex flex-row justify-between mt-10">
      <div class="border-t border-b border-gray-300 py-5 min-w-60 px-2">
        <i class="fa-solid fa-arrow-left mr-2"></i>이전글
      </div>
      <div
        class="border-t border-b border-gray-300 py-5 min-w-60 px-2 flex justify-end items-center"
      >
        다음글<i class="fa-solid fa-arrow-right ml-2"></i>
      </div>
    </div>

    <div class="mt-10"></div>
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
</script>
