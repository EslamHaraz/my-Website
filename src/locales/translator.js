import VueI18n from "vue-i18n";
import Vue from "vue";
import ar from "./ar/index";
import en from "./en/index";
const messages = {
  en: en,
  ar: ar,
};
Vue.use(VueI18n);
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: window.localStorage.getItem("lang"), // set locale
  messages, // set locale messages
});
new Vue({ i18n }).$mount("#app");
