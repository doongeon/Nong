<template>
  <div class="flex flex-col md:flex-row h-screen">
    <div class="flex flex-column justify-center sm:flex-row sm:items-center sm:gap-3 w-full">
      <i> region </i>
      <select
        v-model="selectedCategory"
        class="border-gray-300 dark:border-gray-700 px-2 py-1 rounded bg-white text-gray-900 focus:ring-orange-400"
      >
        <option v-for="cat in categories" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>

      <input
        type="text"
        v-model="keyword"
        @keydown.enter="onEnter"
        placeholder="검색어를 입력하세요"
        class="sm:w-96 md:w-[30rem] border border-gray-300 px-3 py-1 rounded w-full sm:w-64 bg-white text-gray-900 focus:ring-orange-400"
      />
    </div>

    <!-- Main Content -->
    <main class="flex-1 p-4 overflow-y-auto">
      <section class="mt-4 space-y-4">
        <PostItem v-for="post in posts" :key="post.postId" :post="post" :query="cr.query" />
        <div class="text-center py-2">
          <span v-if="loading">로딩 중…</span>
        </div>
      </section>
    </main>
  </div>



</template>

<script setup>
import api from '@/api/boardApi';
import { ref, reactive, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import PostItem from '@/components/board/PostItem.vue';
// import moment from 'moment';

const categories = ['전체', '재능기부', '농작물', 'Q&A', '자유', '마을소식'];

const selectedCategory = ref('전체');
const keyword = ref('');
const loading = ref(false);
const page = ref({ list: [] });
const posts = computed(() => {
  if(!page.value || typeof page.value.list !== 'object') return []
  return page.value.list;
})

const cr = useRoute();
const router = useRouter();

const pageRequest = reactive({
  pageNum: parseInt(cr.query.page) || 1, // 현재 페이지 번호를 설정: URL 쿼리 파라미터에서 page 값을 가져와 정수로 변환, 없으면 기본값 1
  size: parseInt(cr.query.size) || 10, // 한 페이지에 보여줄 항목 수를 설정: URL 쿼리 파라미터에서 amount 값을 가져와 정수로 변환, 없으면 기본값 10
});

const handlePageChange = async (pageNum) => {
  router.push({ query: { page: pageNum, size: pageRequest.size } });
};

const load = async (query) => {
  loading.value = true;

  try {
    const data = await api.getList(query);
    page.value = data;
    console.log('page loaded', page.value);
  } catch (e) {
    console.error('fail to load list', e);
  } finally {
    loading.value = false;
  }
};

// const changeRegion = reactive({
//   region: (cr.query.region) || "내위치GPS"
// });

// const changeCategory = reactive({
//   category: (cr.query.category)
// });

// const getKeyword = reactive({
//   keyword: (cr.query.keyword)
// });

// watch(cr, async(params)=> {
//   console.log('watch region', cr.query.region);
//   changeRegion.region = cr.query.region;

//   page.value = await api.getByRegion(params);
// });

// watch(cr, async(params)=> {
//   console.log('watch category', cr.query.category);
//   changeCategory.category = cr.query.category;
//   if (changeCategory.category == '전체') {
//     await load(changeCategory);
//   } else {
//     page.value = await api.getByCateory(params);
//   }
// });

// 주소 query가 바뀔때마다
watch(
  () => cr.query,
  async () => {
    console.log('WATCH호출됨...자동 변경된 객체 page>> ', cr.query);

    pageRequest.pageNum = parseInt(cr.query.page) || 1;
    pageRequest.size = parseInt(cr.query.size) || 10;

    keyword.value = cr.query.keyword || '';
    selectedCategory.value = cr.query.category || '전체';

    const query = {
      page: pageRequest.pageNum,
      size: pageRequest.size,
      keyword: keyword.value,
      category: selectedCategory.value === '전체' ? '' : selectedCategory.value,
      region: cr.query.region || '',
    };

    await load(query);
  },
  {immediate: true}
);

watch(selectedCategory, (newCategory) => {
  router.push({
    query: {
      ...cr.query,
      category: newCategory === '전체' ? '' : newCategory,
      page: 1 // 카테고리 바꾸면 페이지는 1로 초기화하는 게 UX상 좋음
    }
  });
});

load(pageRequest);

const onEnter = () => {
  if (!keyword.value.trim()) return;

  router.push({
    path: `/board/`,
    query: {
      keyword: keyword.value.trim(),
      category: selectedCategory.value,
      page: pageRequest.pageNum,
      size: pageRequest.size,
    },
  });
};

</script>

<style scoped></style>
