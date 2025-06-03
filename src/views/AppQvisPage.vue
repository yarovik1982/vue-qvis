//AppQvisPage.vue
<script setup>
import q from '../data/quizes.json'
import {ref, watch} from 'vue'
import Card from '@/components/Card.vue'

const quizes = ref(q)
const search = ref('')
watch(search, () => {
   quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>
<template>
  <div class="container">
    <div class="header">
      <input type="text" placeholder="Поиск..." v-model="search" name="search">
    </div>
    <div class="options-container">
      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
    </div>
  </div>
</template>
<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}

.header input {
  width: 100%;
  max-width: 400px;
  border: 0;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 1rem;
  transition: box-shadow 0.2s ease;
}

.header input:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.5);
}

.options-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  justify-items: center;
}

@media (max-width: 640px) {
  .container {
    padding: 15px;
  }

  .header {
    margin-bottom: 20px;
  }

  .header input {
    padding: 12px 15px;
  }

  .options-container {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}
</style>