// import api from './index.js'

// const BASE_URL = '/api/member';
// const headers = { 'Content-Type': 'multipart/form-data' };
// const headers = { 'Content-Type': 'Application/json' };

// export default {
// async get(id) {
//   const { data } = await api.get(`${BASE_URL}/checkusername/${id}`);
//   console.log('GET', data);
//   return data;
// },
// async post(dto) {
//   const { data } = await api.put(`${BASE_URL}/${member.username}`, dto, headers);
//   console.log('POST: ', data);
//   return data;
// },
// multipart
// async multipart(dto) {
// const formData = new FormData();
// formData.append('username', member.username);
// formData.append('password', member.password);
// formData.append('email', member.email);
// if (member.avatar) {
//   formData.append('avatar', member.avatar);
// }
// const { data } = await api.post(`${BASE_URL}/${member.username}`, dto, headers);
// console.log('POST: ', data);
// return data;
// },
// }
