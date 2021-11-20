<template>
  <img
    v-if="type === type_mode[0]"
    src="@/assets/img/station.svg"
    alt="search"
  />
  <div :class="type" v-if="type === type_mode[1]">
    <MarkerItem
      type="bubble"
      :content="type_info.able1.content"
      :color="type_info.able1.color"
      :content-color="type_info.able1.contentColor"
      :size="type_info.able1.size"
    >
      <div :class="marker_info.contentColor">
        <slot />
      </div>
    </MarkerItem>
    <MarkerItem
      type="bubble"
      :content="type_info.able2.content"
      :color="type_info.able2.color"
      :content-color="type_info.able2.contentColor"
      :size="type_info.able2.size"
    >
      <div :class="marker_info.contentColor">
        <slot />
      </div>
    </MarkerItem>
  </div>
  <MarkerItem
    v-else
    type="bubble"
    :content="marker_info.content"
    :color="marker_info.color"
    :content-color="marker_info.contentColor"
    :size="marker_info.size"
    hasClick="true"
    @click="clickFun"
  >
    <div :class="marker_info.contentColor">
      <slot v-if="marker_info.content === 'text'" />
    </div>
  </MarkerItem>
</template>

<script>
import MarkerItem from "./MarkerItem.vue";

const type_info = {
  search: {
    content: "",
    color: "",
    contentColor: "",
    size: "M",
  },
  able_all: {
    content: "text",
    color: "blue-800",
    contentColor: "blue-100",
    size: "M",
  },
  unable: {
    content: "text",
    color: "gray-100",
    contentColor: "gray-700",
    size: "M",
  },
  unable_active: {
    content: "text",
    color: "gray-400",
    contentColor: "gray-700",
    size: "L",
  },
  closed: {
    content: "closed",
    color: "blue-200",
    contentColor: "blue-600",
    size: "M",
  },
  closed_active: {
    content: "closed",
    color: "blue-200",
    contentColor: "blue-800",
    size: "L",
  },
  able1: {
    content: "text",
    color: "primary-color-master",
    contentColor: "blue-100",
    size: "M",
  },
  able1_active: {
    content: "text",
    color: "yellow-800",
    contentColor: "blue-100",
    size: "L",
  },
  able2: {
    content: "text",
    color: "blue-700",
    contentColor: "blue-100",
    size: "M",
  },
  able2_active: {
    content: "text",
    color: "blue-800",
    contentColor: "blue-100",
    size: "L",
  },
};
const type_mode = Object.keys(type_info);

export default {
  components: { MarkerItem },
  props: {
    type: {
      type: String,
      default: type_mode[3],
    },
    clickFun: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      type_info,
      type_mode,
      marker_info: type_info[this.type],
    };
  },
};
</script>

<style lang="scss" scoped>
.able_all {
  width: fit-content;
  position: relative;

  & :last-child.marker {
    position: absolute;
    z-index: -1;
    top: 0;
    right: -8px;
  }
}
</style>