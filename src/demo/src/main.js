import Vue from "vue";
import VueIntersectionPlugin from "vue-intersection-plugin";
import mandMobile from "mand-mobile";
import "mand-mobile/lib/mand-mobile.css";
import App from "./App.vue";
import { log } from "./utils/";
Vue.use(mandMobile);
Vue.use(VueIntersectionPlugin, {
  handler: data => log(data)
});
import router from "./router";
import "normalize.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
