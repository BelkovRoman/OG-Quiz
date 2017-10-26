<template>
  <div class="pagination">
    <div
      @click="currentQuestion > 0 ? prevQuestion() : () => {}"
      class="arrow-container"
      :class="currentQuestion > 0 ? 'arrow-container_active' : 'arrow-container_disabled'"
    >
      <div class="arrow arrow_prev"></div>
    </div>
    <div class="pagination__inner">
      Вопрос
      <span class="pagination__number">{{ currentQuestion + 1 }}</span>
      из
      <span class="pagination__number">{{ progressLength }}</span>
    </div>
    <div
      @click="currentQuestion < (progressLength - 1) ? nextQuestion() : () => {}"
      class="arrow-container"
      :class="currentQuestion < (progressLength - 1) ? 'arrow-container_active' : 'arrow-container_disabled'"
    >
      <div class="arrow arrow_next"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pagination',

  props: {
    currentQuestion: Number,
    prevQuestion: Function,
    nextQuestion: Function,
    progressLength: Number
  }
}
</script>

<style>
  .pagination {
    width: 250px;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    font-size: 15px;
    margin-bottom: 20px;
  }

  .pagination__inner {
    width: 120px;
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
  }

  .pagination__number {
    font-weight: 600;
  }

  .arrow-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 40px;
    height: 40px;
    background-color: #ececec;
    box-shadow: 0px 0px 20px 2px rgba(191, 191, 191, 0.75);
    transition: all .7s;
  }

  .arrow-container_active {
    cursor: pointer;
  }

  .arrow-container_active:hover {
    opacity: .7;
  }

  .arrow-container_disabled {
    opacity: .3;
  }

  .arrow {
    position: relative;
    width: 25px;
    height: 25px;
  }

  .arrow:after,
  .arrow:before {
    position: absolute;
    display: block;
    content: '';
    width: 20px;
    height: 4px;
    left: 4px;
    border-radius: 10px;
    background-color: #828282;
  }

  .arrow:after {
    transform: rotate(45deg);
    top: 5px;
  }

  .arrow:before {
    transform: rotate(-45deg);
    top: 17px;
  }

  .arrow_prev {
    transform: rotate(180deg);
  }
</style>
