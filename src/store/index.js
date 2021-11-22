import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      pos: {
        lat: 0,
        lng: 0,
      },
    };
  },
  mutations: {
    posGetter(state, pos) {
      console.log(pos);
      const crd = pos.coords;
      state.pos = {
        lat: crd.latitude,
        lng: crd.longitude,
      };
    },
  },
});
