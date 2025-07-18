// import { ref, computed } from 'vue';
// import { defineStore } from 'pinia';
// import axios from '@/api';

// const initState = {
//   token: '', // 접근 토큰(JWT)
//   user: {
//     username: '', // 사용자 ID
//     email: '', // Email
//     roles: [], // 권한 목록
//   },
// };

// export const useAuthStore = defineStore('auth', () => {
//   const state = ref({ ...initState });

//   const isLogin = computed(() => !!state.value.user.username); // 로그인 여부
//   const username = computed(() => state.value.user.username); // 로그인 사용자 ID
//   const email = computed(() => state.value.user.email);

//   const login = async (member) => {
//     //state.value.token = 'test token';
//     //state.value.user = {

//     //username: member.username,
//     //email: member.username + '@test.com' } ;

//     // api 호출
//     const { data } = await axios.post('/api/auth/login', member);
//     state.value = { ...data }; //axios결과를 state에 넣어줌
//     localStorage.setItem('auth', JSON.stringify(state.value));
//   };

//   const logout = () => {
//     localStorage.clear();
//     state.value = { ...initState };
//   };

//   const getToken = () => state.value.token;

//   const load = () => {
//     const auth = localStorage.getItem('auth');
//     if (auth != null) {
//       state.value = JSON.parse(auth);
//       console.log(state.value);
//     }
//   };

//   const changeProfile = (member) => {
//     state.value.user.email = member.email;
//     localStorage.setItem('auth', JSON.stringify(state.value));
//   };

//   load();

//   return { state, username, email, isLogin, login, changeProfile, logout, getToken };
// });
