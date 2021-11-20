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