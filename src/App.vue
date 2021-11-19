<template>
  <Marker>
    <span>1</span>
  </Marker>
  <GoogleMap />
</template>
<script>
import GoogleMap from "./component/GoogleMap.vue";
import Marker from "./component/Marker.vue";
export default {
  components: {
    GoogleMap,
    Marker,
  },
};
</script>

