<script setup>
import { reactive, computed } from 'vue';
import config from '@/config';
import MenuGroup from '../menu/MenuGroup.vue';
// import AccountMenuGroup from './menu/AccountMenuGroup.vue';
defineProps({
  categories: Array,
  selected: String,
});

let state = reactive({isNavShow: false});

</script>
<template>
  <aside class="navbar">
    <ul>
      <li
        v-for="cat in categories"
        :key="cat"
        :class="{ active: cat === selected }"
        @click="$emit('update:selected', cat)"
      >
        {{ cat }}
      </li>
    </ul>
  </aside>
</template>

<style>

</style>
