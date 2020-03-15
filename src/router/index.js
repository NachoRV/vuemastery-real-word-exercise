import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "../views/EventList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList
  },
  {
    path: "/event-create",
    name: "EventCreate",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "EventCreate" */ "../views/EventCreate.vue")
  },
  {
    path: "/event/:id",
    name: "EventShow",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "EventShow" */ "../views/EventShow.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
