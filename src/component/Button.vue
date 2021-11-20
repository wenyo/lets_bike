<template>
  <button @click="clickFun">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Button",
    },
    clickFun: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
<style lang="scss" scoped>
button {
  cursor: pointer;
  border: unset;
  color: $basic-color-hover;
  background: $primary-color-second;
  font-size: 14px;
  padding: 10px 100px;
  border-radius: 8px;
  transition: .3s;

  &:hover {
    background: $gradient-color-primary;
  }
}
</style>