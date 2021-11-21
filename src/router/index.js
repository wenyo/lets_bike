import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    icon: "map"
  },
  {
    path: "/bike",
    name: "Bike",
    component: Home,
    icon: "bike"
  },
  {
    path: "/route",
    name: "Route",
    component: Home,
    icon: "route"
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
