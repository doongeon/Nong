<template>
  <div>
    <div class="max-w-md mx-auto mt-20 shadow-lg rounded-lg">
      <form class="px-10 py-5" @submit.prevent="login">
        <div class="text-center font-bold text-2xl py-7">로그인</div>
        <hr class="text-gray-300" />
        <div class="mt-5 px-1">
          <div>
            <label class="" for="id">아이디</label>
          </div>
          <div>
            <input
              class="mt-3 px-2 w-full border border-gray-300 rounded-md disabled:bg-gray-300"
              type="text"
              name="id"
              id="id"
              v-model="member.username"
              placeholder=""
            />
          </div>
        </div>
        <div class="mt-5">
          <div>
            <label for="password">비밀번호</label>
          </div>
          <div>
            <input
              class="mt-3 px-2 w-full border border-gray-300 rounded-md disabled:bg-gray-300"
              type="password"
              name="password"
              id="password"
              v-model="member.password"
              placeholder=""
            />
          </div>
        </div>
        <hr class="text-gray-300 mt-10" />
        <div class="w-full flex justify-center items-center py-5">
          <button
            type="submit"
            class="text-orange-600 font-bold cursor-pointer hover:opacity-50"
            :disabled="disableSubmit"
          >
            로그인
          </button>
        </div>
        <div>
          <span>{{ error }}</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// const router = useRouter();
// const route = useRoute();

const member = reactive({
  username: '',
  password: '',
});

const error = ref('');
const disableSubmit = computed(() => !(member.username && member.password));

// const login = async () => {
//   try {
//     await auth.login(member);
//     if (route.query.next) {
//       router.push({ name: route.query.next }); // util/guard.js 에서 next를 넣어줬을때
//     } else {
//       // 일반 로그인
//       router.push('/');
//     }
//   } catch (e) {
//     error.value = e.response.data;
//   }
// };
</script>
