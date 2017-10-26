<template>
  <div class="lastQuestions">
    <div
      v-for="item in userAnswers"
      :key="item.id"
      :class="'lastQuestions__button'"
      @click="() => moveTo(item.id)"
    >
      {{ item.id }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'last-questions',

    props: {
      moveTo: Function,
      userAnswers: Array
    }
  }
</script>

<style>
  .lastQuestions {
    position: absolute;
    display: flex;
    right: -40px;
    top: 0;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .lastQuestions__button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-size: 16px;
    border-radius: 5px;
    background-color: #ececec;
    box-shadow: 0px 0px 20px 2px rgba(191, 191, 191, 0.75);
    transition: opacity .7s;
    cursor: pointer;
    user-select: none;
    width: 25px;
    height: 25px;
    margin-bottom: 10px;
  }

  .lastQuestions__button:hover {
    opacity: .7;
  }

  .lastQuestions__button:last-child {
    margin-bottom: 0;
  }
</style>
