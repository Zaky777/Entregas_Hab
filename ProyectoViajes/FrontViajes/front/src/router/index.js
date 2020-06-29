import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { isLoggedIn } from "../api/utils";
import { checkAdmin } from "../api/utils";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      allowAnonymous: true,
    },
  },
  {
    path: "/about",
    name: "About",

    component: () => import("../views/About.vue"),
    meta: {
      allowAnonymous: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
    meta: {
      allowAnonymous: true,
    },
  },
  {
    path: "/usuarios",
    name: "usuarios",

    component: () => import("../views/usuarios.vue"),
    meta: {
      allowAnonymous: false,
      allowNoAdmin: false,
    },

    beforeEnter: (to, from, next) => {
      if (to.meta.allowNoAdmin === false && !checkAdmin()) {
        alert("no puedes pasar");
        next({
          path: "/",
          query: { redirect: to.fullPath },
        });
      } else {
        next();
      }
    },
  },
  {
    path: "/registro",
    name: "registro",

    component: () => import("../views/registro.vue"),
    meta: {
      allowAnonymous: true,
    },
  },
  {
    path: "/lugares_experiencias",
    name: "lugares_experiencias",

    component: () => import("../views/lugares_experiencias.vue"),
    meta: {
      allowAnonymous: true,
    },
  },
  {
    path: "/addViajes",
    name: "addViajes",
    component: () => import("../views/addViajes.vue"),
    meta: {
      allowAnonymous: false,
    },
  },
  {
    path: "/myUser",
    name: "MyUser",
    component: () => import("../views/MyPerfil.vue"),
    meta: {
      allowAnonymous: false,
    },
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
      path: "/",
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});
export default router;
