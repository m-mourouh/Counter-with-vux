import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    counter: 0,
    count: 1,
    history: [0],
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
    getHistory(state) {
      return state.history;
    },
  },
  mutations: {
    increment(state) {
      state.counter += state.count;
    },
    decrement(state) {
      state.counter -= state.count;
    },
    setCountNumber(state, newValue) {
      state.count = newValue;
    },
    addRandomNumber(state, randomNumber) {
      state.counter += randomNumber;
    },
    addCounterToHistory(state) {
      state.history.push(state.counter);
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
    decrement({ commit }) {
      commit("decrement");
    },
    setCountNumber({ commit }, newValue) {
      commit("setCountNumber", newValue);
    },
    addRandomNumber({ commit }) {
      axios
        .get(
          "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
        )
        .then((res) => {
          commit("addRandomNumber", res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    addCounterToHistory({ commit }) {
      commit("addCounterToHistory");
    },
  },
  modules: {},
});
