<script setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['selectOption'])
const {question} = defineProps(['question'])
const emitSelectedOption = (isCorrect) => {
   emit('selectOption', isCorrect)
}
</script>
<template>
  <div class="question-container">
    <h1 class="question">{{question.text}}</h1>

    <div class="options-container">
      <div class="option"
      v-for="option in question.options"
      :key="option.id"
      @click="emitSelectedOption(option.isCorrect)"
   >
        <p class="option-label">{{ option.label }}</p>
        <div class="option-value">
          <p>{{option.text}}</p>
        </div>
      </div>
    </div>
    
  </div>
</template>
<style scoped>
.question-container {
   margin-top: 20px;
}
.question {
   margin-bottom: 20px;
   font-size: 40px;
}
.option {
   display: flex;
   margin-bottom: 20px;
   cursor: pointer;
   align-items: center;
}
.option-label {
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 30px;
   width: 50px;
   height: 50px;
   background-color: bisque;
   
}
.option-value {
   background-color: rgb(244, 239,239);
   width: 100%;
   padding: 0 20px;
   font-size: 30px;
}
.option-value p{
   line-height: 50px;
}
</style>
