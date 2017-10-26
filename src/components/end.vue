<template>
  <div class="endWindow">
    <h1 class="endWindow__title endWindow__title_large">
      Результаты: ты прошел тест на
      <span class="endWindow__title_light">
        {{ this.result }}
      </span>
         из
       <span class="endWindow__title_light">
         {{ this.answersLength }}
       </span>
    </h1>
    <article class="endWindow__acticle">
      <p>
        {{ this.rating.rate }}
      </p>
    </article>
    <div class="endWindow__container">
      <img
        alt="end-window image"
        :src="'../../static/images/answers/' + this.subRating.src"
        class="endWindow__image"
      />
    </div>
    <h2 class="endWindow__title endWindow__title_big">
      Ты - {{ this.subRating.title }}
    </h2>
    <article class="endWindow__acticle">
      <p>
        {{ this.subRating.description }}
      </p>
    </article>
    <customButton :action="restartTest">
      Начать тест заново
    </customButton>
  </div>
</template>

<script>
  import customButton from './shared/button.vue'

  import answers from '../data/answers.json'
  import ratings from '../data/ratings.json'

  export default {
    name: 'end-window',

    props: {
      restartTest: Function,
      userAnswers: Array
    },

    components: {
      customButton
    },

    data () {
      return {
        rating: {},
        subRating: {}
      }
    },

    methods: {
      initRating (score) {
        let rate = {}

        if (score >= 0 && score <= 5) {
          rate = ratings.filter((value) => value.id === '0')[0]
        } else if (score > 5 && score <= 10) {
          rate = ratings.filter((value) => value.id === '1')[0]
        } else if (score > 10 && score <= 15) {
          rate = ratings.filter((value) => value.id === '2')[0]
        } else if (score > 15 && score <= 20) {
          rate = ratings.filter((value) => value.id === '3')[0]
        } else if (score > 20 && score <= 24) {
          rate = ratings.filter((value) => value.id === '4')[0]
        } else if (score === 25) {
          rate = ratings.filter((value) => value.id === '5')[0]
        }

        return rate
      },

      initSubRating () {
        return this.rating.content[Math.floor(Math.random() * (2 - 0 + 1) + 0)]
      }
    },

    computed: {
      answersLength () {
        return this.userAnswers.length
      },

      result () {
        let score = 0

        for (let i = 0; i < this.userAnswers.length; i++) {
          for (let j = 0; j < answers.length; j++) {
            if (this.userAnswers[i].id === answers[j].id && this.userAnswers[i].answer === answers[j].correct) {
              score++
            }
          }
        }

        return score
      }
    },

    beforeMount () {
      this.rating = this.initRating(this.result)
    },

    mounted () {
      this.subRating = this.initSubRating()
    }
  }
</script>

<style>
  .endWindow {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    padding-top: 10px;
    margin-right: auto;
    margin-left: auto;
  }

  .endWindow__title {
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
  }

  .endWindow__title_light {
    color: #fff
  }

  .endWindow__title_large {
    font-size: 25px;
    margin-bottom: 20px;
  }

  .endWindow__title_big {
    font-size: 22px;
    margin-bottom: 15px;
  }

  .endWindow__container {
    margin-left: auto;
    margin-right: auto;
    max-width: 270px;
    margin-bottom: 15px;
  }

  .endWindow__image {
    border: 2px solid #777;
    max-width: 100%;
    height: auto;
  }

  .endWindow__acticle {
    margin-bottom: 15px;
  }

  .endWindow__acticle p {
    margin-top: 0;
    margin-bottom: 10px;
  }
</style>
