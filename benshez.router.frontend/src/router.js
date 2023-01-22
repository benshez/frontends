import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AttachedDevicesView from "./views/AttachedDevicesView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: true,
      title: "Dream Weddings Sunshine Coast - Home",
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "./views/AboutView.vue"),
    meta: {
      requiresAuth: true,
      title: "Dream Weddings Sunshine Coast - About",
    },
  },
  {
    path: "/attacheddevices",
    name: "attacheddevices",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "./views/AttachedDevicesView.vue"),
    meta: {
      requiresAuth: true,
      title: "Dream Weddings Sunshine Coast - About",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;