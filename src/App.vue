<script setup>
  import { RouterView } from 'vue-router';
  import NavBar from './components/shared/NavBar.vue';
  import Footer from './components/shared/Footer.vue';
</script>

<template>
  <NavBar></NavBar>
    <router-view class="min-vh-100"></router-view>
    <h1>On est dans App.vue</h1>
  <Footer></Footer>
</template>

<style scoped></style>