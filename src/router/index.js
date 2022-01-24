import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
// import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";
import Jobs from "../views/Jobs/Jobs.vue";
import JobDetails from "../views/Jobs/JobDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue"),
  },
  {
    path: "/Jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
    props: true,
  },
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
