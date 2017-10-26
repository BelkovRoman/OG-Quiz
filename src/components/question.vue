<template>
  <div class="question">
    <h2 class="question__title">
      {{ data.content }}
    </h2>
    <div class="question__container">
      <img
        v-if="Number(data.id) <= 50"
        alt="question image"
        :src="'../../static/images/questions/question_' + data.id + '.jpg'"
        class="question__image"
      />
      <video
        v-else
        :src="'../../static/videos/question_' + data.id + '.webm'"
        width="460"
        height="260"
        controls
      ></video>
    </div>
    <ul class="question__list">
      <li
        v-for="answer in data.variants"
        @click="() => chooseAnswer(answer.content, data.id)"
        class="question__item"
        :class="answer.content === choosedAnswer ? 'question__item_selected' : ''"
      >
        <span class="question__asnwer">
          {{ answer.content }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'question',

  props: {
    data: Object,
    chooseAnswer: Function,
    choosedAnswer: String
  }
}
</script>

<style>
  .question__inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 20px;
  }

  .question__title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    max-width: 500px;
    font-size: 20px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
  }

  .question__container {
    margin-left: auto;
    margin-right: auto;
    max-width: 460px;
    max-height: 300px;
    margin-bottom: 30px;
  }

  .question__image {
    border: 2px solid #777;
    max-width: 100%;
    height: auto;
  }

  .question__list {
    width: 100%;
  }

  .question__item {
    cursor: pointer;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border: 1px solid #a5a5a5;
    box-shadow: 0px 0px 20px 2px rgba(191, 191, 191, 0.75);
    transition: all .7s;
  }

  .question__item_selected {
    background-color: #dedede;
    color: #3e3e3e;
  }

  .question__item:last-child {
    margin-bottom: 0;
  }

  .question__item:hover {
    opacity: .7;
  }

  .question__asnwer {
    font-weight: 600;
  }
</style>
