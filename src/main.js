import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import arabic from "@/locales/ar/index";
import english from "@/locales/en/index";
import VueI18n from "vue-i18n";
import "./main.css";
let language = localStorage.getItem("lang");
if (!language) {
  localStorage.setItem("lang", "en");
}
Vue.use(VueI18n);
const messages = {
  en: english,
  ar: arabic,
};
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: localStorage.getItem("lang"), // set locale
  messages, // set locale messages
});
Vue.config.productionTip = false;
library.add(fas,fab);
Vue.component("FontAwesomeIcon", FontAwesomeIcon);
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
