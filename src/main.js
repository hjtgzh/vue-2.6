import Vue from "vue";
import {
  Menu,
  MenuItem,
  Submenu,
  MenuItemGroup,
  Button,
  Select
} from "element-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

Vue.config.productionTip = false;
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(Button);
Vue.use(Select);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
