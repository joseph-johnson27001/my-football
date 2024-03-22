// store.js
import { createStore } from "vuex";

export default createStore({
  state: {
    isLoading: false,
  },
  mutations: {
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
  actions: {
    setIsLoading({ commit }, isLoading) {
      commit("setIsLoading", isLoading);
    },
  },
});
