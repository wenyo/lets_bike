<template>
  <div class="marker">
    <Icon :icon="`marker_${shape}`" color="yellow-300" />
    <Icon icon="attraction" color="dark" v-if="content !== content_mode[2]" />
    <slot v-else />
  </div>
</template>

<script>
import Icon from "./Icon.vue";

const shape_mode = ["circle", "bubble"];
const content_mode = ["attraction", "station", "text"];

export default {
  props: {
    shape: {
      type: String,
      default: shape_mode[1],
      validator: (val) => shape_mode.includes(val),
    },
    content: {
      type: String,
      default: content_mode[0],
      validator: (val) => content_mode.includes(val),
    },
  },
  data() {
    return {
      content_mode,
    };
  },
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped>
.marker {
  width: fit-content;
  position: relative;

  & :first-child {
    font-size: 40px;
  }

  & :last-child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    padding-bottom: 10%;
  }

  & i:last-child {
    font-size: 14px;
    padding-bottom: 20%;
  }
}
</style>