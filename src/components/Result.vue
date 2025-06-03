<script setup>
import {defineProps, computed, ref, watch, onUnmounted} from 'vue'
// import { useRoute } from 'vue-router';
const {quizQuestionLength, numberOfCorrectAnswer, answersHistory} = defineProps(['quizQuestionLength', 'numberOfCorrectAnswer', 'answersHistory'])
// const route = useRoute()

const showModal = ref(false)

const percentage = computed(() => {
  return Math.round((numberOfCorrectAnswer / quizQuestionLength) * 100)
})

const resultMessage = computed(() => {
  if (percentage.value >= 80) return 'Отличный результат!'
  if (percentage.value >= 60) return 'Хороший результат!'
  if (percentage.value >= 40) return 'Неплохо, но есть куда расти'
  return 'Стоит повторить материал'
})

const resultClass = computed(() => {
  if (percentage.value >= 80) return 'excellent'
  if (percentage.value >= 60) return 'good'
  if (percentage.value >= 40) return 'average'
  return 'poor'
})

const incorrectAnswers = computed(() => {
  return answersHistory.filter(answer => !answer.isCorrect)
})

const toggleModal = () => {
  showModal.value = !showModal.value
}

// Следим за изменением состояния модального окна
watch(showModal, (isOpen) => {
  if (isOpen) {
    // Блокируем скролл при открытии модального окна
    document.body.style.overflow = 'hidden'
  } else {
    // Возвращаем скролл при закрытии
    document.body.style.overflow = 'auto'
  }
})

// Очищаем стили при размонтировании компонента
onUnmounted(() => {
  document.body.style.overflow = 'auto'
})
</script>
<template>
    <div class="results" :class="{ 'no-scroll': showModal }">
      <div class="result-header">
        <p>Ваш результат</p>
        <h1 :class="resultClass">{{numberOfCorrectAnswer}}/{{ quizQuestionLength }}</h1>
      </div>
      
      <div class="statistics">
        <div class="stat-item">
          <div class="stat-value">{{ percentage }}%</div>
          <div class="stat-label">Процент правильных ответов</div>
        </div>
        
        <div class="stat-item">
          <div class="stat-value">{{ numberOfCorrectAnswer }}</div>
          <div class="stat-label">Правильных ответов</div>
        </div>
        
        <div class="stat-item clickable" @click="toggleModal">
          <div class="stat-value">{{ quizQuestionLength - numberOfCorrectAnswer }}</div>
          <div class="stat-label">Неправильных ответов</div>
          <div class="click-hint">Нажмите, чтобы посмотреть</div>
        </div>
      </div>

      <div class="result-message" :class="resultClass">
        {{ resultMessage }}
      </div>

      <!-- <RouterLink :to="`/quiz/${route.params.id}`">Пройти тест еще раз...</RouterLink> -->
      <RouterLink to="/quiz" class="back-link">Вернуться к тестам</RouterLink>

      <!-- Модальное окно -->
      <Teleport to="body">
        <div v-if="showModal" class="modal-overlay" @click="toggleModal">
          <div class="modal-content" @click.stop>
            <div class="modal-header">
              <h2>Неправильные ответы</h2>
              <button class="close-button" @click="toggleModal">&times;</button>
            </div>
            <div class="modal-body">
              <div v-for="(answer, index) in incorrectAnswers" :key="index" class="incorrect-answer">
                <div class="question-text">{{ answer.question.text }}</div>
                <div class="answers">
                  <div class="correct-answer">
                    <span class="label">Правильный ответ:</span>
                    {{ answer.question.options.find(opt => opt.isCorrect).text }}
                  </div>
                  <div class="user-answer">
                    <span class="label">Ваш ответ:</span>
                    {{ answer.userAnswer?.text || 'Не выбран' }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Teleport>
    </div>
</template>
<style scoped>
.results {
  text-align: center;
  padding: clamp(30px, 5vw, 50px) 20px;
  max-width: 800px;
  margin: 0 auto;
}

.result-header {
  margin-bottom: 40px;
}

.result-header p {
  font-size: clamp(1.25rem, 3vw, 1.5625rem);
  color: #2c3e50;
  margin: 0 0 20px;
}

.result-header h1 {
  font-size: clamp(3rem, 8vw, 5rem);
  margin: 0;
  transition: color 0.3s ease;
}

.statistics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.stat-item {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-value {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #2c3e50;
}

.stat-label {
  color: #64748b;
  font-size: 0.9rem;
}

.result-message {
  font-size: 1.25rem;
  padding: 15px 25px;
  border-radius: 8px;
  margin-bottom: 30px;
  display: inline-block;
}

/* Цветовая схема для разных результатов */
.excellent {
  color: #059669;
}

.good {
  color: #0284c7;
}

.average {
  color: #d97706;
}

.poor {
  color: #dc2626;
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

.clickable {
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.click-hint {
  font-size: 0.8rem;
  color: #6b7280;
  margin-top: 5px;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.clickable:hover .click-hint {
  opacity: 1;
}

.no-scroll {
  overflow: hidden;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden; /* Запрещаем скролл на оверлее */
}

.modal-content {
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto; /* Разрешаем скролл только внутри модального окна */
  position: relative;
  margin: 20px; /* Добавляем отступы от краев экрана */
}

.modal-header {
  padding: 20px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: white;
  z-index: 1;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #1f2937;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6b7280;
  padding: 5px;
}

.close-button:hover {
  color: #1f2937;
}

.modal-body {
  padding: 20px;
}

.incorrect-answer {
  padding: 15px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  margin-bottom: 15px;
}

.incorrect-answer:last-child {
  margin-bottom: 0;
}

.question-text {
  font-size: 1.1rem;
  color: #1f2937;
  margin-bottom: 15px;
  font-weight: 500;
}

.answers {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.correct-answer, .user-answer {
  padding: 10px;
  border-radius: 6px;
}

.correct-answer {
  background: #ecfdf5;
  color: #059669;
}

.user-answer {
  background: #fef2f2;
  color: #dc2626;
}

.label {
  font-weight: 500;
  margin-right: 8px;
}

@media (max-width: 640px) {
  .results {
    padding: 20px 15px;
  }

  .result-header {
    margin-bottom: 30px;
  }

  .statistics {
    grid-template-columns: 1fr;
    gap: 15px;
    margin-bottom: 30px;
  }

  .stat-item {
    padding: 15px;
  }

  .stat-value {
    font-size: 1.75rem;
  }

  .result-message {
    font-size: 1.1rem;
    padding: 12px 20px;
    margin-bottom: 25px;
  }

  .back-link {
    padding: 10px 20px;
    width: 100%;
    box-sizing: border-box;
  }

  .modal-content {
    width: 95%;
    max-height: 90vh;
  }

  .modal-header {
    padding: 15px;
  }

  .modal-body {
    padding: 15px;
  }

  .question-text {
    font-size: 1rem;
  }

  .answers {
    gap: 8px;
  }

  .correct-answer, .user-answer {
    padding: 8px;
    font-size: 0.9rem;
  }
}
</style>