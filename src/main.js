import { createApp } from "vue";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import App from "./App.vue";
import router from "./router";

createApp(App)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyBD5zZfLsBKn7bZThJUoP8wkJn6shPhXkM",
    },
  })
  .mount("#app");
