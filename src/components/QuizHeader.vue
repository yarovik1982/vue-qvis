<script setup>
import { defineProps } from 'vue';
const {questionStatus, barPercentage} = defineProps(['questionStatus', 'barPercentage'])
</script>
<template>
  <header class="quiz-header">
    <h4 >Вопрос {{ questionStatus }}</h4>
    <div class="bar">
      <div class="completion"
         :style="{width:barPercentage}"
      ></div>
    </div>
  </header>
</template>
<style scoped>
.quiz-header {
  margin: 20px auto;
  max-width: 800px;
  padding: 0 20px;
  text-align: center;
}

h4 {
  font-size: clamp(1.25rem, 3vw, 1.875rem);
  margin: 0 0 20px;
  color: #2c3e50;
}

.bar {
  width: 100%;
  max-width: 500px;
  height: 40px;
  border: 3px solid bisque;
  border-radius: 20px;
  margin: 0 auto;
  overflow: hidden;
}

.completion {
  height: 100%;
  width: 0%;
  background-color: bisque;
  transition: width 0.3s ease-in-out;
}

@media (max-width: 640px) {
  .quiz-header {
    margin: 15px auto;
    padding: 0 15px;
  }

  h4 {
    margin-bottom: 15px;
  }

  .bar {
    height: 30px;
  }
}
</style>
