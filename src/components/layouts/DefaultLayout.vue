<template>
  <div>
    <HeaderView />
    <div>
      <slot></slot>
    </div>
    <FooterView />
  </div>
</template>

<script setup>
import FooterView from '@/components/layouts/FooterView.vue';
import HeaderView from '@/components/layouts/HeaderView.vue';
</script>
