import { createRouter, createWebHashHistory } from "vue-router";
import LayoutView from "../views/LayoutView.vue";
import HomeView from "../views/HomeView.vue";
import SignInView from "../views/SignInView.vue";
import ProductView from "../views/ProductView.vue";
import ProductInfoView from "../views/ProductInfoView.vue";
import ArticleView from "../views/ArticleView.vue";
import ArticleInfoView from "../views/ArticleInfoView.vue";
import PrepareView from "../views/PrepareView.vue";
import DashboardView from "../views/DashboardView.vue";
import BackProducts from "../views/backend/BackProducts.vue";
import BackArticles from "../views/backend/BackArticles.vue";
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
          path: "/product",
          name: "product",
          component: ProductView,
          meta: { title: `推薦行程` },
        },
        {
          path: "/product/:id",
          name: "productInfo",
          component: ProductInfoView,
          meta: { title: `推薦行程` },
        },
        {
          path: "/article",
          name: "article",
          component: ArticleView,
          meta: { title: `登山知識` },
        },
        {
          path: "/articleInfo",
          name: "articleInfo",
          component: ArticleInfoView,
          meta: { title: `登山知識` },
        },
        {
          path: "/prepare",
          name: "prepare",
          component: PrepareView,
          meta: { title: `行前準備` },
        },
      ],
    },
    {
      path: "/backend",
      name: "backend",
      component: DashboardView,
      children: [
        {
          path: "products",
          name: "products",
          component: BackProducts,
        },
        {
          path: "articles",
          name: "articles",
          component: BackArticles,
        },
      ],
    },
  ],
  // 路徑切換時回到置頂
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0, behavior: "smooth" });
      }, 300);
    });
  },
});
export default router;
