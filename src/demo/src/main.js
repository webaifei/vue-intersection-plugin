import Vue from "vue";
import VueIntersectionPlugin from "vue-intersection-plugin";
import App from "./App.vue";
import { log } from "./utils/";
Vue.use(VueIntersectionPlugin, {
  handler: data => log(data)
});
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
