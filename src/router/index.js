import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import RecipeDetails from "../views/RecipeDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/recipe/:id",
      name: "RecipeDetails",
      component: RecipeDetails,
    },
  ],
});

export default router;
