<template>
  <div id="app">
    <start
      v-if="stage === 'start'"
      :startTest="startTest"
    />
    <quizContent
      v-if="stage === 'test'"
      :data="questions"
      :endTest="endTest"
    />
    <end
      v-if="stage === 'end'"
      :restartTest="repeatTest"
      :userAnswers="userAnswers"
    />
  </div>
</template>

<script>
import start from './components/start.vue'
import quizContent from './components/quizContent.vue'
import end from './components/end.vue'

import questionsInit from './data/arrayBuilder.js'

require('./assets/styles/fonts.css')

export default {
  name: 'app',

  components: {
    start,
    quizContent,
    end
  },

  data () {
    return {
      stage: 'start',
      questions: questionsInit(),
      userAnswers: []
    }
  },

  methods: {
    repeatTest () {
      this.stage = 'start'
    },

    startTest () {
      this.stage = 'test'
    },

    endTest (array) {
      this.userAnswers = array
      this.stage = 'end'
    }
  }
}
</script>

<style>
  body {
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #212121;
    color: #d6d6d6;
  }

  ul {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
  }

  #app {
    font-family: 'Podkova', Helvetica, Arial, sans-serif;
  }
</style>
