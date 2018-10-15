import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidate from "vee-validate";

import "./lib/hotcss/hotcss.js";
// 引入mint ui的样式
import "mint-ui/lib/style.css";

Vue.config.productionTip = false;

Vue.use(VeeValidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
