import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/tartists",
    name: "tartists",
    component: () => import("../views/TopArtist.vue"),
  },
  {
    path: "/ttracks",
    name: "ttracks",
    component: () => import("../views/TopTracks.vue"),
  },
  {
    path: "*",
    name: "error",
    component: () => import("../views/ErrorV"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
