<template>
  <div class="contain">
    <GoogleMap />
  </div>
</template>

<script>

import GoogleMap from "../component/GoogleMap.vue";
export default {
  name: "Home",
  components: {
    GoogleMap,
  },
};
</script>
