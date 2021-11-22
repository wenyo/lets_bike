<template>
  <Nav />
  <router-view></router-view>
</template>
<script>
import { mapMutations } from "vuex";
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
    ...mapMutations(["posGetter"]),
    findMe() {
      navigator.geolocation.getCurrentPosition(this.posGetter, (error) => {
        console.error(error);
      });
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

