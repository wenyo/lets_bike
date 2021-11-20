<template>
  <i :class="`icon-${icon} ${color}`"></i>
</template>

<script>
const icon_name = [
  "bike",
  "bottom",
  "map",
  "route",
  "setting",
  "top",
  "address",
  "attraction",
  "back",
  "closed",
  "mark",
  "phone",
  "position",
  "remove",
  "search",
  "station",
  "tome",
  "update",
  "web",
  "zoom_in",
  "zoomout",
  "marker_circle",
  "marker_bubble",
];

export default {
  props: {
    icon: {
      type: String,
      default: icon_name[1],
      validator: (val) => icon_name.includes(val),
    },
    color: {
      type: String,
      default: "blue-400",
    },
  },
  data() {
    return {
      hasIcon: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.light {
  color: $basic-color-light;
  opacity: 0.6;
}
.light-focus {
  color: $basic-color-light;
}
.dark {
  color: $basic-color-dark;
}
.blue-200 {
  color: $blue-200;
}
.blue-400 {
  color: $blue-400;
}
.blue-600 {
  color: $blue-600;
}
.gray-100 {
  color: $gray-100;
}
.gray-200 {
  color: $gray-200;
}
.gray-600 {
  color: $gray-600;
}
.gray-700 {
  color: $gray-700;
}
.gray-900 {
  color: $gray-900;
}
.yellow-300 {
  color: $yellow-300;
}
.yellow-500 {
  color: $yellow-500;
}
.yellow-800 {
  color: $yellow-800;
}
.yellow-900 {
  color: $yellow-900;
}
</style>