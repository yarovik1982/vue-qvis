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
      <RouterLink to="/quiz" class="back-link">Вернуться к тестам</RouterLink>
    </div>
</template>
<style scoped>
.results {
  text-align: center;
  padding: clamp(30px, 5vw, 50px) 20px;
  max-width: 800px;
  margin: 0 auto;
}

p {
  font-size: clamp(1.25rem, 3vw, 1.5625rem);
  color: #2c3e50;
  margin: 0 0 20px;
}

h1 {
  font-size: clamp(3rem, 8vw, 5rem);
  color: #2c3e50;
  margin: 0 0 30px;
}

.back-link {
  display: inline-block;
  padding: 12px 24px;
  background-color: #4299e1;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: clamp(0.875rem, 2vw, 1rem);
  transition: background-color 0.2s ease;
}

.back-link:hover {
  background-color: #3182ce;
}

@media (max-width: 640px) {
  .results {
    padding: 20px 15px;
  }

  p {
    margin-bottom: 15px;
  }

  h1 {
    margin-bottom: 20px;
  }

  .back-link {
    padding: 10px 20px;
    width: 100%;
    box-sizing: border-box;
  }
}
</style>