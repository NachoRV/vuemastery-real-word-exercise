import Vue from "vue";
import Vuex from "vuex";
import * as user from "@/store/modules/user.js";
import * as event from "@/store/modules/event.js";
import * as notification from "./modules/notification.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community"
    ],

    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
      { id: 3, text: "...", done: true },
      { id: 4, text: "...", done: false }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    catLength: state => {
      return state.categories.length;
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    /*activeTodosCount: (state, getters) => {
      return state.todos.length - getters.doneTodos.length
    },*/
    activeTodosCount: state => {
      return state.todos.filter(todo => !todo.done).length;
    },
    categoriesLength: state => {
      return state.categories.length;
    }
  },
  modules: {
    user,
    event,
    notification
  }
});
