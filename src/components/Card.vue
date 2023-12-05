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
    <img v-if="quiz.img" :src="quiz.img" />
    <img v-else src="http://placehold.it/310x190/" alt="">
    
    <div class="card-text">
      <h2>{{ quiz.name }}</h2>
      <p>{{ quiz.questions.length }} задания</p>
    </div>
  </div>
</template>
<style scoped>
.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 35px;
  margin-right: 13px;
  cursor: pointer;
}
.card img {
  width: 100%;
  height: 190px;
  margin: 0;
}
.card-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
}
</style>
