import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const state = {
  language: localStorage.getItem("lang"),
};
export default new Vuex.Store({
  state: state,
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
