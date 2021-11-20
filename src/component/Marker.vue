<template>
  <div class="marker">
    <img v-if="type === type_mode[0]" src="@/assets/img/station.svg" alt="" />

    <template v-else>
      <Icon :icon="`marker_${type}`" :color="'yellow-900'" />
      <slot v-if="content === content_mode[2]" />
      <Icon v-else :icon="content" :color="contentColor" />
    </template>
  </div>
</template>

<script>
import Icon from "./Icon.vue";

const type_mode = ["red", "circle", "bubble", ];
const content_mode = ["attraction", "station", "text"];

export default {
  props: {
    type: {
      type: String,
      default: type_mode[0],
      validator: (val) => type_mode.includes(val),
    },
    content: {
      type: String,
      default: content_mode[0],
      validator: (val) => content_mode.includes(val),
    },
    color: {
      type: String,
    },
    contentColor: {
      type: String,
    },
  },
  data() {
    return {
      content_mode,
      type_mode,
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

  img {
    width: 35px;
  }
  
  & i:first-child {
    font-size: 40px;
  }

  & i:last-child {
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