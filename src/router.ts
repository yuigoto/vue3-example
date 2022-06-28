import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import StoresTest from "@/views/StoresTest.vue";
import Test from "@/views/Test.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Home,
    name: "Home",
    meta: {
      title: "Home",
    },
  },
  {
    path: "/stores",
    component: StoresTest,
    name: "Stores",
    meta: {
      title: "Stores",
    },
  },
  {
    path: "/test",
    component: Test,
    name: "Test",
    meta: {
      title: "Test",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  document.title = `Vue 3 Example | ${to.meta.title || to.name}`;
});

export default router;
