import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import TablePage from "../views/TablePage.vue";
import FixturesPage from "../views/FixturesPage.vue";
import ResultsPage from "../views/ResultsPage.vue";
import NewsPage from "../views/NewsPage.vue";
import TeamsPage from "../views/TeamsPage.vue";
import HomePage from "../views/HomePage.vue";
import TeamPage from "../views/TeamPage.vue";
import FixturePage from "../views/FixturePage.vue";
import ResultPage from "../views/ResultPage.vue";
import LatestVideosPage from "@/views/LatestVideosPage.vue";
import SquadPage from "@/views/SquadPage.vue";
import PlayerPage from "@/views/PlayerPage.vue";
import StatsPage from "@/views/StatsPage.vue";
import LiveFixturePage from "@/views/LiveFixturePage.vue";

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
    path: "/team",
    name: "Team",
    component: TeamPage,
  },
  {
    path: "/news",
    name: "News",
    component: NewsPage,
  },
  {
    path: "/squad",
    name: "Squad",
    component: SquadPage,
  },
  {
    path: "/player",
    name: "Player",
    component: PlayerPage,
  },
  {
    path: "/stats",
    name: "Stats",
    component: StatsPage,
  },
  {
    path: "/videos",
    name: "Videos",
    component: LatestVideosPage,
  },
  {
    path: "/fixture",
    name: "fixture",
    component: FixturePage,
  },
  {
    path: "/result",
    name: "result",
    component: ResultPage,
  },
  {
    path: "/result",
    name: "result",
    component: ResultPage,
  },
  {
    path: "/live",
    name: "live",
    component: LiveFixturePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
