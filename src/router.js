import Vue from "vue";
import Router from "vue-router";
import user from "./utils/user";
import Login from "./views/login";
import Home from "./views/home";
// import About from "./views/about";
import Child from "./views/child";
import Other from "./views/other";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
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
//路由跳转之前
router.beforeEach((to, from, next) => {
  if (to.path !== "/login" && !user.getToken()) {
    return next("/login");
  }
  next();
});

export default router;
