<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { usePosts } from '@/composables/usePosts';

const route = useRoute();

defineProps({ 
    id : Number,
})
const {getPostDetail, loading} = usePosts();

const post = ref({});
const loading = ref(true);

onMounted(async() => {
    const id = Number(route.params.id);
    post.value = await getPostDetail(id);
    loading.value = false;
})
</script>

<template>
<div class="post-detail">
    <button @click="$router.back()"> 돌아가기 </button>
    <div v-if="loading"> 로딩중 ...</div>
    <div v-else>
        <h2> 작성자 : {{ post.author }}</h2>
         <p>{{ post.content }}</p>
    </div>
</div>
</template>

<style scoped>

</style>