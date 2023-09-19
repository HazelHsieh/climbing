import { createRouter, createWebHashHistory } from "vue-router";
import LayoutView from "../views/LayoutView.vue";
import HomeView from "../views/HomeView.vue";
import SignInView from "../views/SignInView.vue";
import ParentView from "../views/ParentView.vue";
import ScheduleView from "../views/ScheduleView.vue";
import KnowledgeView from "../views/KnowledgeView.vue";
import PrepareView from "../views/PrepareView.vue";
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/signIn",
      name: "signIn",
      component: SignInView,
    },
    {
      path: "/",
      name: "layout",
      component: LayoutView,
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
        {
          path: "/schedule",
          name: "schedule",
          component: ScheduleView,
        },
        {
          path: "/knowledge",
          name: "knowledge",
          component: KnowledgeView,
        },
        {
          path: "/prepareView",
          name: "prepareView",
          component: PrepareView,
        },
        {
          path: "/parent",
          name: "parent",
          component: ParentView,
        },

      ],
    },
  ],
});

export default router;
