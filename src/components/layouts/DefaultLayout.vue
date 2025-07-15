<<<<<<< HEAD
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
=======
<script setup>
import Header from './Header.vue';
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
</script>

<template>
  <div class="min-h-screen md:h-screen flex flex-col">
    <NavBar />

    <div class="flex-1 w-full">
        <Header />
        <main class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <slot></slot>
        </main>
        <Footer />
    </div>
  </div>
</template>

<style scoped></style>
>>>>>>> ffc77c7 (create board)
