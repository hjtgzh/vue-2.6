import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home";
// import About from "./views/about";
import Child from "./views/child";
import Other from "./views/other";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/about/index.vue")
    },
    {
      path: "/other",
      name: "other",
      component: Other
    },
    {
      path: "/child",
      name: "child",
      component: Child
    }
  ]
});
