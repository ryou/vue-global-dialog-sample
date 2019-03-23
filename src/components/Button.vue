<template>
  <button class="Button" @click="$emit('click')"><span class="Button_text"><slot></slot></span></button>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style lang="scss" scoped>
  $mainColor: #1abc9c;
  $duration: .3s;

  .Button {
    position: relative;
    display: inline-block;

    font-size: 14px;
    font-weight: bold;
    color: #fff;

    padding: 10px 20px;
    border: 0;
    border-radius: 9999px;

    cursor: pointer;

    overflow: hidden;

    box-shadow: rgba(#000, .1) 0 0 5px 2px;

    &::before {
      content: '';
      display: block;

      position: absolute;
      left: 0; right: 0;
      top: 0; bottom: 0;

      background-color: $mainColor;

      transform-origin: right center;

      transition: transform $duration;
    }

    &:hover {
      &::before {
        transform: scaleX(0);
      }

      .Button_text {
        color: $mainColor;
      }
    }
  }
  .Button_text {
    position: relative;
    color: #fff;

    transition: color $duration;
  }
</style>
