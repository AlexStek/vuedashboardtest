import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "./assets/variables.scss";
import routes from "./routes";
import store from "./store/store";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount("#app");
