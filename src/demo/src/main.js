import Vue from "vue";
import VueIntersectionPlugin from "vue-intersection-plugin";
import mandMobile from "mand-mobile";
import FastClick from "fastclick";
import "mand-mobile/lib/mand-mobile.css";
import App from "./App.vue";
import { log } from "./utils/";
Vue.use(mandMobile);
Vue.use(VueIntersectionPlugin, {
  handler: data => log(data)
});
import router from "./router";
import "normalize.css";
FastClick.attach(document.body);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
