import api from '@/api';

const BASE_URL = '/api/posts';
const headers = { 'Content-Type': 'multipart/form-data' };

import { ref } from 'vue';

const posts = ref([]);
const loading = ref(false);

export default {
  // 게시물 목록 불러오기
  async getList(params) {
    if (loading.value) return;
    loading.value = true;
    try {
      console.log('[params]', params);
      // 빈 값 제거
      Object.keys(params).forEach(
        (key) => (params[key] === '' || params[key] == null) && delete params[key],
      );
      console.log('[boardApi 요청 파라미터]', params);
      const { data } = await api.get(`${BASE_URL}`, { params:params });
      console.log('BOARD GET LIST: ', data);
      posts.value = data;
      return {list: data, total: data.length};

    } catch (error) {
      console.error('게시글 목록 조회 실패:', error);
      return null;
    } finally {
      loading.value = false;
    }
  },

  // 지역 선택시
  async getByRegion(params) {
  if (loading.value) return;
    loading.value = true;
    try {
      // 빈 값 제거
      Object.keys(params).forEach(
        (key) => (params[key] === '' || params[key] == null) && delete params[key],
      );

      const { data } = await api.get(`${BASE_URL}`, { params });
      console.log('BOARD REGION CHANGED: ', data.region);
      posts.value = data;
      return data;

    } catch (error) {
      console.error('게시글 목록 조회 실패:', error);
      return null;

    } finally {
      loading.value = false;
    }
  },

  // 카테고리 선택시
  async getByCateory(params) {
      if (loading.value) return;
    loading.value = true;
    try {
      // 빈 값 제거
      Object.keys(params).forEach(
        (key) => (params[key] === '' || params[key] == null) && delete params[key],
      );

      const { data } = await api.get(`${BASE_URL}`, { params });
      console.log('BOARD CATEGORY CHANGED: ', data.category);
      posts.value = data;
      return data;

    } catch (error) {
      console.error('게시글 목록 조회 실패:', error);
      return null;

    } finally {
      loading.value = false;
    }
  },

  // 검색값이 있는 경우
  async getByKeyword(params) {
    if (loading.value) return;
    loading.value = true;
    try {
      Object.keys(params).forEach(
        (key) => (params[key] === '' || params[key] == null) && delete params[key],
      );

      const { data } = await api.get(`${BASE_URL}`, { params });
      posts.value = data;
      return posts;

    } catch (error) {
      console.log('검색어에 따라 포스트 불러오기 실패:', error);
      return null;

    } finally {
      loading.value = false;
    }
  },

  // 게시글 작성
  // async create(article) {
  //   const formData = new FormData();
  //   formData.append('title', article.title);
  //   formData.append('writer', article.writer);
  //   formData.append('content', article.content);

  //   if (article.files) {
  //     for (let i = 0; i < article.files.length; i++) {
  //       formData.append('files', article.files[i]);
  //     }
  //   }

  //   const { data } = await api.post(BASE_URL, formData, { headers });
  //   console.log('BOARD POST: ', data);
  //   return data;
  // },

  async delete(postId) {
    const { data } = await api.delete(`${BASE_URL}/${postId}`);
    console.log('BOARD DELETE: ', data);
    return data;
  },

  // 첨부파일 삭제
  // async deleteAttachment(no) {
  //   const { data } = await api.delete(`${BASE_URL}/deleteAttachment/${no}`);
  //   console.log('ATTACHMENT DELETE: ', data);
  //   return data;
  // },

  // 게시글 수정
  // async update(article) {
  //   const formData = new FormData();
  //   formData.append('no', article.no);
  //   formData.append('title', article.title);
  //   formData.append('writer', article.writer);
  //   formData.append('content', article.content);

  //   if (article.files) {
  //     // 첨부파일이 있는 경우
  //     for (let i = 0; i < article.files.length; i++) {
  //       formData.append('files', article.files[i]);
  //     }
  //   }

  //   const { data } = await api.put(`${BASE_URL}/${article.no}`, formData, {
  //     headers,
  //   });
  //   console.log('BOARD PUT: ', data);
  //   return data;
  // },
};
