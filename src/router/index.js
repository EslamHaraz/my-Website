import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import mainLayout from "@/layout/mainLayout.vue";
import AboutView from "../views/AboutView.vue";
import ContactUsView from "../views/ContactUsView.vue";
import MyProjectsView from "../views/MyProjectsView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "mainLayout",
    component: mainLayout,
    children: [
      {
        path: "Home",
        name: "home",
        component: HomeView,
      },
      {
        path: "About-Me",
        name: "AboutView",
        component: AboutView,
      },
      {
        path: "MyProjects",
        name: "MyProjectsView",
        component: MyProjectsView,
      },
      {
        path: "ContactUs",
        name: "ContactUsView",
        component: ContactUsView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
