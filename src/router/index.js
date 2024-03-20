import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import TablePage from "../views/TablePage.vue";
import FixturesPage from "../views/FixturesPage.vue";
import ResultsPage from "../views/ResultsPage.vue";
import NewsPage from "../views/NewsPage.vue";
import TeamsPage from "../views/TeamsPage.vue";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/table",
    name: "Table",
    component: TablePage,
  },
  {
    path: "/fixtures",
    name: "Fixtures",
    component: FixturesPage,
  },
  {
    path: "/results",
    name: "Results",
    component: ResultsPage,
  },
  {
    path: "/teams",
    name: "Teams",
    component: TeamsPage,
  },
  {
    path: "/news",
    name: "News",
    component: NewsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
