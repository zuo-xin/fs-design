import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: { name: "layout" },
  },
  {
    path: "/layout",
    name: "layout",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../views/LayOut/LayOut.vue"),
  },
  {
    path: "/color",
    name: "color",
    component: () =>
      import(/* webpackChunkName: "color" */ "../views/Color/Color.vue"),
  },
  {
    path: "/text",
    name: "text",
    component: () =>
      import(/* webpackChunkName: "text" */ "../views/Text/Text.vue"),
  },
  {
    path: "/border",
    name: "border",
    component: () =>
      import(/* webpackChunkName: "border" */ "../views/Border/Border.vue"),
  },
  {
    path: "/button",
    name: "button",
    component: () =>
      import(/* webpackChunkName: "button" */ "../views/Button/Button.vue"),
  },
  {
    path: "/icon",
    name: "icon",
    component: () =>
      import(/* webpackChunkName: "icon" */ "../views/Icon/Icon.vue"),
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0,
    };
  },
});

export default router;
