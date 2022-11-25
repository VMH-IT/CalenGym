import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/components/client/AcountUer/CreateAcount.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/components/client/AcountUer/LoginUser.vue"),
  },
  {
    path: "/BMI",
    name: "BMI",
    component: () => import("@/components/Homepage/BmiUser.vue"),
  },
  {
    path: "/MainCalendar",
    name: "MainCalendar",
    component: () => import("@/components/client/MainCalander/MainCalendar.vue"),
  },
  {
    path: "/Calendar",
    name: "Calendar",
    component: () => import("@/components/client/Calendar/CalendarGym.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
