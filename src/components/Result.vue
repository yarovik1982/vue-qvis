<script setup>
import {defineProps} from 'vue'
// import { useRoute } from 'vue-router';
const {quizQuestionLength, numberOfCorrectAnswer} = defineProps(['quizQuestionLength', 'numberOfCorrectAnswer'])
// const route = useRoute()
</script>
<template>
    <div class="results">
      <p>Ваш результат...</p>
      <h1>{{numberOfCorrectAnswer}}/{{ quizQuestionLength }}</h1>
      <!-- <RouterLink :to="`/quiz/${route.params.id}`">Пройти тест еще раз...</RouterLink> -->
      <RouterLink to="/quiz">Вернуться к тестам...</RouterLink>
    </div>
</template>
<style scoped >
.results{
   text-align: center;
   padding: 50px 0;
}
p{
   font-size: 25px;
}
h1{
   font-size: 80px;
}
</style>