<template>
  <div
    @click="() => action()"
    class="customButton"
  >
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'custom-button',

    props: {
      action: Function
    }
  }
</script>

<style>
  .customButton {
    padding: 10px 15px;
    color: #000;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    border-radius: 5px;
    background-color: #ececec;
    box-shadow: 0px 0px 20px 2px rgba(191, 191, 191, 0.75);
    transition: opacity .7s;
    cursor: pointer;
    user-select: none;
  }

  .customButton:hover {
    opacity: .7;
  }
</style>
