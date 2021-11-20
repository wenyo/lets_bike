<template>
  <div :class="className()" @click="clickFun">
    <Icon :icon="`marker_${type}`" :color="color" />
    <slot v-if="content === content_mode[2]" />
    <Icon v-else :icon="content" :color="contentColor" />
  </div>
</template>

<script>
import Icon from "./Icon.vue";

const type_mode = ["circle", "bubble"];
const content_mode = ["attraction", "closed", "text"];
const sizes = ["M", "L"];

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
    size: {
      type: String,
      default: sizes[0],
      validator: (val) => sizes.includes(val),
    },
    hasClick: {
      type: Boolean,
      default: false,
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
  methods: {
    className() {
      let classAry = ["marker", `size-${this.size}`];
      if (this.hasClick) classAry.push("pointer");
      return classAry.join(" ");
    },
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

  & :last-child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-bottom: 10%;
  }

  & i:last-child {
    font-size: 14px;
    padding-bottom: 20%;
  }

  &.size-M {
    & i:first-child {
      font-size: 40px;
    }
    & :last-child {
      font-size: 16px;
    }
    & i:last-child {
      font-size: 14px;
    }
  }

  &.size-L {
    & i:first-child {
      font-size: 46px;
    }
    & :last-child {
      font-size: 20px;
    }
    & i:last-child {
      font-size: 20px;
    }
  }
}
</style>