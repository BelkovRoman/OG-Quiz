<template>
  <div class="startWindow">
    <h1 class="startWindow__title">
      Тест на знание Optimus Gang
    </h1>
    <div class="startWindow__container">
      <img
        alt="start-window image"
        :src="'../../static/favicon.png'"
        class="startWindow__image"
      />
    </div>
    <article class="startWindow__acticle">
      <p>
        Тест состоит из 25 вопросов.
      </p>
      <p>
        На каждый вопрос можно ответить, выбрав один из четырех предложенных вариантов.
      </p>
      <p>
        Вопросы будут двух типов:<br/>- первый представляет из себя картинку, отображающую момент из видоса;<br/>- второй - короткий видос.
      </p>
      <p>
        Между вопросами можно перемещаться, не отвечая на них.
      </p>
      <p>
        Ответив на каждый вопрос, появится возможность завершить тест и узнать результат.
      </p>
    </article>
    <customButton :action="startTest">
      Начать тест
    </customButton>
  </div>
</template>

<script>
  import customButton from './shared/button.vue'

  export default {
    name: 'start-window',

    props: {
      startTest: Function
    },

    components: {
      customButton
    }
  }
</script>

<style>
  .startWindow {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-right: auto;
    margin-left: auto;
  }

  .startWindow__title {
    margin-top: 0;
    margin-bottom: 30px;
    font-size: 25px;
  }

  .startWindow__container {
    margin-left: auto;
    margin-right: auto;
    max-width: 200px;
    max-height: 300px;
  }

  .startWindow__image {
    border-radius: 50%;
    border: 2px solid #777;
    max-width: 100%;
    height: auto;
  }
</style>
