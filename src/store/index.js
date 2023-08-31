import getRandomInt from "@/helpers/getRandomInt";
import { createStore } from "vuex";

export default createStore({
  state: {
    count        : 1,
    isLoading    : false,
    lastMutation : "none",
    lastRandomInt: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
      state.lastMutation = "increment";
    },
    incrementBy(state, value) {
      state.count        += value;
      state.lastMutation  = "incrementBy";
    },
    incrementByRandom(state, value) {
      state.count        += value;
      state.lastMutation  = "incrementByRandom";
    },

    incrementByRandom20(state, value) {
      state.count         += value;
      state.lastMutation   = "incrementByRandom";
      state.lastMutation   = 'incrementByRandom20' + value;
      state.lastRandomInt  = value;
    },

    setIsLoading(state, value){
      state.isLoading    = value;
      state.lastMutation = "setIsLoading " + value;
      state.isLoading    = value;
    }
  },
  actions: {
    async incrementRandomInt({commit}) {
      commit("setIsLoading", true);

      const randomInt = await getRandomInt();
      commit("incrementByRandom20", randomInt);

      commit("setIsLoading", false);
    },
  },
});
