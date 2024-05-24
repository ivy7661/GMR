import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      component: () => import("../views/FrontView.vue"),
      children: [
        {
          path: "/",
          component: HomeView
        },
        {
          path: "about",
          component: () => import("../views/AboutView.vue")
        },
        {
          path: "news",
          component: () => import("../views/NewsView.vue")
        },
        {
          path: "parter",
          component: () => import("../views/PartnerView.vue")
        },
        {
          path: "contact",
          component: () => import("../views/ContactView.vue")
        }
      ]
    }
  ]
});

export default router;
