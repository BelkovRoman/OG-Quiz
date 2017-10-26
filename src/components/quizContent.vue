<template>
  <div class="content">
    <pagination
      v-if="!isTestCompleted"
      :currentQuestion="currentQuestion"
      :prevQuestion="prevQuestion"
      :nextQuestion="nextQuestion"
      :progressLength="progress.length"
    />

    <transition name="fade">
      <customButton
        v-if="isTestCompleted"
        :action="() => endTest(progress)"
        :class="'endButton'"
      >
        Закончить тест
      </customButton>
    </transition>

    <question
      :data="data[currentQuestion]"
      :chooseAnswer="changeProgress"
      :choosedAnswer="progress[currentQuestion].answer"
    />

    <transition name="fade">
      <lastQuestion
        v-if="lastQuestions.length <= 10"
        :moveTo="moveToQuestion"
        :userAnswers="lastQuestions"
      />
    </transition>
  </div>
</template>

<script>
  import pagination from './pagination.vue'
  import question from './question.vue'
  import lastQuestion from './lastQuestions.vue'
  import customButton from './shared/button.vue'

  export default {
    name: 'quizContent',

    props: {
      data: Array,
      endTest: Function
    },

    components: {
      pagination,
      question,
      customButton,
      lastQuestion
    },

    data () {
      return {
        currentQuestion: 0,
        progress: this.initProgress(),
        isTestCompleted: false,
        lastQuestions: this.initProgress()
      }
    },

    methods: {
      initProgress: function () {
        return this.data.map((item) => {
          return {
            id: item.id,
            answer: ''
          }
        })
      },

      changeProgress: function (content, number) {
        this.progress = this.progress.map(item => {
          return {
            id: item.id,
            answer: item.id === number ? content : item.answer
          }
        })
      },

      nextQuestion: function () {
        if (this.currentQuestion <= this.progress.length) {
          this.currentQuestion++
        }
      },

      prevQuestion: function () {
        if (this.currentQuestion >= 0) {
          this.currentQuestion--
        }
      },

      moveToQuestion: function (value) {
        this.currentQuestion = value - 1
      }
    },

    watch: {
      progress () {
        let newArray = []

        for (let i = 0; i < this.progress.length; i++) {
          if (this.progress[i].answer === '') {
            newArray = newArray.concat({ id: i + 1 })
          }
        }

        this.lastQuestions = newArray
      },

      lastQuestions () {
        if (!this.lastQuestions.length) {
          this.isTestCompleted = true
        }
      }
    }
  }
</script>

<style>
  .content {
    position: relative;
    height: 100%;
    padding-top: 20px;
    margin-left: auto;
    margin-right: auto;
    max-width: 530px;
    user-select: none;
  }

  .endButton {
    width: 140px;
    margin-left: auto;
    margin-right: auto;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to {
    transform: scaleX(-50%);
    opacity: 0;
  }
</style>
