//AppQvisPage.vue
<script setup>
import q from '../data/quizes.json'
import {ref, watch} from 'vue'
import Card from '@/components/Card.vue'


const quizes = ref(q)
const search = ref('')
watch(search, () => {
   quizes.value = q.filter(quiz =>  quiz.name.toLowerCase().includes(search.value))
})
</script>
<template>
    <div class="container">
      <div class="header">
         <h1>Тесты</h1>
         <input type="text" placeholder="Поиск..." v-model="search" name="search">
      </div>
      <div class="options-container">
         <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" @click="console.log(quiz.id)"/>
      </div>
    </div>
</template>
<style scoped >
.container {
   max-width: 1000px;
   margin: 0 auto;
}
.header {
   display: flex;
   align-items: center;
   margin-top: 20px;
   margin-bottom: 10px;
}
.header h1{
   font-weight: bold;
   margin-right: 30px;
}
.header input{
   border: 0;
   background-color: rgba(128,128,128,.1);
   padding: 10px;
   border-radius: 10px;
}
.options-container {
   display: flex;
   flex-wrap: wrap;
   margin-top: 40px;
}

</style>