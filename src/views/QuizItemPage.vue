<script setup>
import Question from '../components/Question.vue'
import QuizHeader from '@/components/QuizHeader.vue'
import Result from '../components/Result.vue';
import { useRouter, useRoute } from 'vue-router';
import quizes from '../data/quizes.json'
import { ref, watch , computed} from 'vue';

const router = useRouter()
const route = useRoute()
const quizId = parseInt(route.params.id)
const quiz = quizes.find(q => q.id === quizId)
const currentQuestionIndex = ref(0)
const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`)
const barPercentage = computed(() => `${currentQuestionIndex.value/quiz.questions.length * 100}%`)
const numberOfCorrectAnswer = ref(0)
const showResults = ref(false)
const onOptionSelected = (isCorrect) => {
   if(isCorrect) {
      numberOfCorrectAnswer.value++
   }
   if(quiz.questions.length - 1 === currentQuestionIndex.value){
      showResults.value = !showResults.value
   }
   currentQuestionIndex.value++
}
</script>
<template>
    <div>
      <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage"/>
      <div>
         <Question 
            v-if="!showResults"
            :question="quiz.questions[currentQuestionIndex]"
            @selectOption="onOptionSelected"
         />
         <Result v-else
            :quizQuestionLength="quiz.questions.length"
            :numberOfCorrectAnswer="numberOfCorrectAnswer"
         />
      </div>
    </div>
</template>
<style  scoped >


</style>