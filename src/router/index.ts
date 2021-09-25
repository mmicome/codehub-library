import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];
// console.log(process.env.BASE_URL)
// let base:string = window.__POWERED_BY_CODEHUB__ ? '/library' : '/';
const router = createRouter({
  history: createWebHistory('/library'),
  // history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
