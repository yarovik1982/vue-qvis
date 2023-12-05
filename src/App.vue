<script setup>
import Header from './components/Header.vue';
</script>
<template>
    <Header/>
    <main class="main">
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
</template>