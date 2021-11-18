<template>
  <div id="map">
    <GMapMap :center="center" :zoom="7" map-type-id="terrain" :options="options">
      <GMapCluster>
        <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position"
        />
      </GMapCluster>
    </GMapMap>
  </div>
</template>

<script>
import {MapStyle} from "./MapStyle.js";
export default {
  mounted() {
    console.log(this.options)
  },
  data() {
    return {
      options: {
        styles: MapStyle,
      },
      center: { lat: 51.093048, lng: 6.84212 },
      markers: [
        {
          position: {
            lat: 51.093048,
            lng: 6.84212,
          },
        },
        {
          position: {
            lat: 52.093048,
            lng: 6.84212,
          },
        }, // Along list of clusters
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.vue-map-container {
  width: 100vw;
  height: 100vh;
}
</style>
