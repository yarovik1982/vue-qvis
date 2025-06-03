//Card.vue
<script setup>
import {useRouter} from 'vue-router'
const {quiz} = defineProps(['quiz'])
const router = useRouter()
const navigateQuiz = () => {
  router.push(`/quiz/${quiz.id}`)
}
</script>
<template>
  <div class="card" @click="navigateQuiz">
    <div class="card-image">
      <img v-if="quiz.img" :src="quiz.img" alt="Quiz thumbnail" />
      <img v-else src="http://placehold.it/310x190/" alt="Placeholder thumbnail">
    </div>
    <div class="card-text">
      <h2>{{ quiz.name }}</h2>
      <p>{{ quiz.questions.length < 5 ? quiz.questions.length + ' задания' : quiz.questions.length + ' заданий'}}</p>
    </div>
  </div>
</template>
<style scoped>
.card {
  width: 100%;
  max-width: 310px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.card-image {
  width: 100%;
  aspect-ratio: 310/190;
  overflow: hidden;
  position: relative;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.card-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: #fff;
  flex-shrink: 0;
}

.card-text h2 {
  font-size: clamp(0.875rem, 2vw, 1.125rem);
  margin: 0;
  flex: 1;
}

.card-text p {
  font-size: clamp(0.75rem, 1.5vw, 0.875rem);
  color: #666;
  margin: 0 0 0 10px;
  white-space: nowrap;
}

@media (max-width: 640px) {
  .card {
    max-width: 100%;
  }
  
  .card-text {
    padding: 12px;
  }
}
</style>
