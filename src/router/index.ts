import DocPage from "@/pages/DocPage.vue";
import MainPage from "@/pages/MainPage.vue";
import MainView from "@/views/MainView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "MainView",
      path: "/",
      component: MainView,
      children: [
        {
          name: "MainPage",
          path: "",
          component: MainPage,
        },
        {
          name: "DocPage",
          path: "doc",
          component: DocPage,
        },
      ],
    },
  ],
});

export default router;
