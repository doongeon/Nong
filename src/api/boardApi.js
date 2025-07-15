import { ref } from 'vue';
import axios from 'axios';

const posts = ref([]);
const page = ref(0);
const loading = ref(false);

export function usePosts() {
  const getMore = async (category) => {
    if (loading.value) return;
    loading.value = true;
    try {
      const response = await axios.get('/posts', {
        params: { category, page: page.value },
      });
      posts.value.push(...response.data);
      page.value++;
    } catch (error) {
      console.error('포스트 불러오기 실패:', error);
    } finally {
      loading.value = false;
    }
  };

  const addPost = async (post) => {
    if (!post.content.trim()) return;
    try {
        const response = await axios.post('/posts', {
            id: post.id,
            author: post.author,
            content: post.content,
        });
        // 서버에서 생성된 포스트 객체를 배열 맨 앞에 추가
        posts.value = [response.data, ...posts.value.filter(p => p.id !== post.id)]
    } catch (error) {
        console.error('포스트 등록 실패:', error);
    }
  };

  const getPostDetail = async (id) => {
    if (loading.value) return;
    loading.value = true;
    try {
        const response = await axios.get(`/posts/{$id}`);
        return response.data;

    } catch(error){
        console.log('상세 포스트 불러오기 실패:', error);
        return null;
    } finally {
        loading.value = false;
    }
  };



  return {
    posts,
    getMore,
    addPost,
    loading,
    getPostDetail,
  };
}
