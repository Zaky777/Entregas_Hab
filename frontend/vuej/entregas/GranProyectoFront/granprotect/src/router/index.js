import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { isLoggedIn } from "../api/utils";
import { checkAdmin } from "../api/utils";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      allowAnonymous: false,
    },
  },
  {
    path: "/about",
    name: "About",

    component: () => import("../views/About.vue"),
    meta: {
      allowAnonymous: false,
    },
  },
  {
    path: "/clientes",
    name: "clientes",

    component: () => import("../views/clientes.vue"),
    meta: {
      allowAnonymous: false,
      allowNoAdmin: false,
    },
  },
  {
    path: "/add",
    name: "addClients",

    component: () => import("../views/addClients.vue"),
    meta: {
      allowAnonymous: false,
      allowNoAdmin: false,
    },

    beforeEnter: (to, from, next) => {
      if (to.meta.allowNoAdmin === false && !checkAdmin()) {
        next({
          path: "/login",
          query: { redirect: to.fullPath },
        });
      } else {
        next();
      }
    },
  },
  {
    path: "/",
    name: "login",

    component: () => import("../views/login.vue"),
    //ruta pública , las anterirores son rutas privadas
    meta: {
      allowAnonymous: true,
    },
  },
  {
    path: "/register",
    name: "register",

    component: () => import("../views/register.vue"),
    //ruta pública , las anterirores son rutas privadas
    meta: {
      allowAnonymous: true,
    },
  },
  {
    path: "*",
    name: "error",
    component: () => import("../views/error.vue"),
  },
];

const router = new VueRouter({
  routes,
});

// COMPROBANDO CADA PÁGINA POR SI LA PERSONA ESTÁ LOGUEADA
router.beforeEach((to, from, next) => {
  //si la ruta es privada y la persona no tiene token
  if (!to.meta.allowAnonymous && !isLoggedIn()) {
    next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});

export default router;
