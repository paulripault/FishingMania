import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import firebase from "firebase/compat/app";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/maps",
    name: "Maps",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Maps.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
    meta: {
      authRequired: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (firebase.auth().currentUser) {
      next();
    } else {
      alert('Vous devez être connecté pour accéder à cette page.');
      next({
        path: '/',
      });
    }
  } else {
    next();
  }
});

export default router;
