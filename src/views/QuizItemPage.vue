<script setup>
import Question from '../components/Question.vue'
import QuizHeader from '@/components/QuizHeader.vue'
import Result from '../components/Result.vue';
import { useRouter, useRoute } from 'vue-router';
import quizes from '../data/quizes.json'
import { ref, watch, computed } from 'vue';

const router = useRouter()
const route = useRoute()
const quizId = parseInt(route.params.id)
const quiz = quizes.find(q => q.id === quizId)
const currentQuestionIndex = ref(0)
const questionStatus = computed(() => `${currentQuestionIndex.value + 1}/${quiz.questions.length}`)
const barPercentage = computed(() => `${currentQuestionIndex.value/quiz.questions.length * 100}%`)
const numberOfCorrectAnswer = ref(0)
const showResults = ref(false)

// Добавляем массив для хранения истории ответов
const answersHistory = ref([])

const onOptionSelected = (isCorrect) => {
   // Сохраняем информацию о текущем вопросе и ответе
   answersHistory.value.push({
     question: quiz.questions[currentQuestionIndex.value],
     isCorrect: isCorrect,
     userAnswer: quiz.questions[currentQuestionIndex.value].options.find(opt => opt.isCorrect === isCorrect)
   })

   if(isCorrect) {
      numberOfCorrectAnswer.value++
   }
   currentQuestionIndex.value++
   
   if(currentQuestionIndex.value === quiz.questions.length){
      showResults.value = true
   }
}
</script>
<template>
  <div class="quiz-page">
    <QuizHeader 
      v-if="!showResults"
      :questionStatus="questionStatus" 
      :barPercentage="barPercentage"
    />
    <div class="quiz-content">
      <Question 
        v-if="!showResults"
        :question="quiz.questions[currentQuestionIndex]"
        @selectOption="onOptionSelected"
      />
      <Result v-else
        :quizQuestionLength="quiz.questions.length"
        :numberOfCorrectAnswer="numberOfCorrectAnswer"
        :answersHistory="answersHistory"
      />
    </div>
  </div>
</template>
<style scoped>
.quiz-page {
  min-height: 100vh;
  background-color: #f7fafc;
  padding: 20px 0;
}

.quiz-content {
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

@media (max-width: 640px) {
  .quiz-page {
    padding: 0;
  }

  .quiz-content {
    border-radius: 0;
    box-shadow: none;
  }
}
</style>