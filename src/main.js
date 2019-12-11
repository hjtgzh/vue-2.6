import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "../config/uiConfig";
import "./assets/font/iconfont.css";
import services from "./services";

Vue.config.productionTip = false;

Vue.prototype.$services = services;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
