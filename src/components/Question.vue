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
  margin: 20px auto;
  max-width: 800px;
  padding: 0 20px;
}

.question {
  margin-bottom: 30px;
  font-size: clamp(1.25rem, 3vw, 2rem);
  line-height: 1.4;
  color: #2c3e50;
}

.options-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.option {
  display: flex;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease;
}

.option:hover {
  transform: translateX(5px);
}

.option-label {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1rem, 2vw, 1.5rem);
  min-width: 50px;
  height: 50px;
  background-color: bisque;
  margin: 0;
  font-weight: bold;
}

.option-value {
  background-color: rgb(244, 239, 239);
  flex: 1;
  padding: 0 20px;
  transition: background-color 0.2s ease;
}

.option:hover .option-value {
  background-color: rgb(234, 229, 229);
}

.option-value p {
  margin: 0;
  line-height: 50px;
  font-size: clamp(0.875rem, 1.5vw, 1.25rem);
}

@media (max-width: 640px) {
  .question-container {
    padding: 0 15px;
    margin: 15px auto;
  }

  .question {
    margin-bottom: 20px;
  }

  .options-container {
    gap: 10px;
  }

  .option-label {
    min-width: 40px;
    height: 40px;
  }

  .option-value {
    padding: 0 15px;
  }

  .option-value p {
    line-height: 40px;
  }
}
</style>
