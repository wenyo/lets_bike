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

