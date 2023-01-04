import { createWebHistory, createRouter } from "vue-router";
import TheHome from "./src/components/TheHome.vue";
import TheInfo from "./src/components/TheInfo";
import TheGaleria from "./src/components/TheGaleria";
import TheContato from "./src/components/TheContato";

const routes = [
  {
    path: "/",
    name: "Home",
    component: TheHome,
  },
  {
    path: "/info",
    name: "Info",
    component: TheInfo,
  },
  {
    path: "/galeria",
    name: "galeria",
    component: TheGaleria,
  },
  {
    path: "/contato",
    name: "contato",
    component: TheContato,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;