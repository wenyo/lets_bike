<template>
  <nav>
    <h1 class="logo">
      <span>let's bike</span>
      <img src="@/assets/img/logo1.svg" alt="let's bike logo" />
    </h1>
    <ul>
      <li class="active"><Icon icon="map" color="yellow-900" /></li>
      <li><Icon icon="bike" color="yellow-900" /></li>
      <li><Icon icon="route" color="yellow-900" /></li>
    </ul>
  </nav>
</template>

<script>
import Icon from "./Icon.vue";
export default {
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped>
nav {
  height: 100vh;
  flex: 0 0 64px;
  background-color: $primary-color-third;
}

.logo {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px 0;

  span {
    display: none;
  }
  img {
    width: 60%;
  }
}
ul {
  margin-top: 80px;
  
  li {
    width: 100%;
    padding-bottom: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    &.active {
      background-color: $basic-color-hover;
    }

    i {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 24px;
    }
  }
}
</style>
