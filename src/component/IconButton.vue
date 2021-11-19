<template>
  <button
    :class="`${type} ${shape}`"
    @mouseover="buttonActive"
    @mouseleave="buttonActive"
  >
    <Icon :icon="icon" :color="style[color]" />
  </button>
</template>

<script>
import Icon from "./Icon.vue";

const button_setting = {
  dark: {
    normal: "gray-600",
    hover: "gray-900",
  },
  primary: {
    normal: "dark",
    hover: "dark",
  },
  empty: {
    normal: "light",
    hover: "light-focus",
  },
};
const type_mode = Object.keys(button_setting);
const color_mode = Object.keys(button_setting.dark);
const shape_mode = ["circle", "square", "top", "bottom"];
export default {
  props: {
    type: {
      type: String,
      default: type_mode[2],
      validator: val => type_mode.includes(val)
    },
    icon: {
      type: String,
    },
    shape: {
      type: String,
      default: shape_mode[2],
      validator: val => shape_mode.includes(val)
    },
  },
  components: {
    Icon,
  },
  data() {
    return {
      style: button_setting[this.type],
      color: "normal",
    };
  },
  methods: {
    buttonActive(e) {
      if (e.type === "mouseover") {
        this.color = color_mode[1];
      } else {
        this.color = color_mode[0];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background: unset;
  border: unset;
  height: 50px;
  width: 50px;
  cursor: pointer;

  i {
    font-size: 22px;
  }

  &.circle {
    border-radius: 100%;
  }
  &.square {
    border-radius: 20%;
  }

  &.top {
    border-radius: 30% 30% 0 0;
  }

  &.bottom {
    border-radius: 0 0 30% 30%;
  }

  &.primary {
    background-color: $primary-color-second;
    &:hover {
      background-color: $yellow-500;
    }
  }

  &.dark {
    background-color: $blue-100;
    &:hover {
      background-color: $blue-200;
    }
  }
}
</style>