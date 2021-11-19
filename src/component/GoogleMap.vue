<template>
  <div id="map">
    <GMapMap
      :center="center"
      :zoom="7"
      ref="myMapRef"
      :options="options"
    >
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
import {ref, watch} from 'vue'
import MapStyle from "./MapStyle.json";
function addMyButton(map) {
  const controlUI = document.createElement("button");
  controlUI.title = "Click to zoom the map";
  const controlText = document.createElement("div");
  controlText.innerHTML = `Center`;
  controlUI.appendChild(controlText);
  
  controlUI.addEventListener("click", () => {
    map.setZoom(map.getZoom() + 1);
  });

  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlUI); // eslint-disable-line no-undef
}

export default {
  setup() {
    const myMapRef = ref();

    watch(myMapRef, googleMap => {
      if (googleMap) {
        googleMap.$mapPromise.then(map=> {
          addMyButton(map);
        })
      }
    });
    
    return {
      myMapRef
    }
  },
  data() {
    return {
      options: {
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: true,
        rotateControlOptions: {
          position: 6,
        },
        fullscreenControl: false,
        styles: MapStyle.map_style,
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
