<template>
  <Nav />
  <router-view></router-view>
</template>
<script>
import Nav from "./component/Nav.vue";
export default {
  components: {
    Nav,
  },
  data() {
    return {
      pos: {
        lat: 0,
        lng: 0,
      },
    };
  },
  mounted() {
    this.findMe();
  },
  methods: {
    findMe() {
      navigator.geolocation.getCurrentPosition(this.posGetter, (error) => {
        console.error(error);
      });
    },
    posGetter(pos) {
      const crd = pos.coords;
      console.log("crd");
      console.log(crd);
      this.pos = {
        lat: crd.latitude,
        lng: crd.longitude,
      };
    },
  },
};
</script>
<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
}
.contain {
  flex: 1;
}
</style>

