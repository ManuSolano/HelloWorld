import { createRouter, createWebHistory } from "@ionic/vue-router";

import TabsPage from "../views/TabsPage.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/tabs/tab1",
      },
      {
        path: "tab1",
        component: () => import("@/views/Tab1Page.vue"),
      },
      {
        path: "tab2",
        component: () => import("@/views/Tab2Page.vue"),
      },
      {
        path: "tab3",
        component: () => import("@/views/Tab3Page.vue"),
      },
    ],
  },
  {
    path: "",
    component: Login,
    children: [
      {
        path: "/login",
        component: () => import("@/views/Login.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
