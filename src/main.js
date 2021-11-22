import { createApp } from "vue";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/scss/reset.css"
import "./assets/scss/basic.scss"
import "./assets/fonts/font.css"
import "./assets/icon/style.css"

createApp(App)
  .use(router)
  .use(store)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyBD5zZfLsBKn7bZThJUoP8wkJn6shPhXkM",
    },
  })
  .mount("#app");
