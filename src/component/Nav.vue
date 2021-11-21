<template>
  <nav>
    <h1 class="logo">
      <span>let's bike</span>
      <img src="@/assets/img/logo1.svg" alt="let's bike logo" />
    </h1>
    <ul>
      <template v-for="routeInfo in routes" :key="routeInfo.name">
        <router-link
          :to="routeInfo.path"
          v-slot="{ isActive, navigate }"
          custom
        >
          <li :class="{ active: isActive }" @click="navigate">
            <Icon :icon="routeInfo.icon" color="yellow-900" />
          </li>
        </router-link>
      </template>
    </ul>
  </nav>
</template>

<script>
import Icon from "./Icon.vue";
import { routes } from "../router";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      routes,
    };
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
