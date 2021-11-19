<template v-if="hasIcon">
  <i :class="`icon-${icon}`"></i>h
</template>
<template v-else>
  <div>error: wrong icon name</div>
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
];

export default {
  props: {
    icon: {
      type: String,
      default: icon_name[0],
    },
    color: {
      type: String,
    },
  },
  data() {
    return {
      hasIcon: true,
    };
  },
  mounted() {
    this.iconCheck(this.icon);
  },
  methods: {
    iconCheck(icon) {
      this.hasIcon = icon_name.find(icon);
    },
  },
};
</script>

<style lang="scss" scoped>
.light{
    color: $basic-color-light;
    opacity: 0.6;
}
.light-focus{
    color: $basic-color-light;
}
.dark{
    color: $basic-color-dark;
}
.blue-400{
    color: $blue-400;
}
.blue-600{
    color: $blue-600;
}
.gray-600{
    color: $gray-600;
}
.gray-700{
    color: $gray-700;
}
.gray-900{
    color: $gray-900;
}
.yellow-900{
    color: $yellow-900;
}
</style>