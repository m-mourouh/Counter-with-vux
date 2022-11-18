<template>
  <h2>Vue Counter</h2>
  <h1>{{ counter }}</h1>
  <div class="counter-actions">
    <button @click="decrement">-</button>
    <input type="number" min="1" v-model="counterNumber" />
    <button @click="increment">+</button>
  </div>
  <br />
  <button @click="addRandomNumber">Add random number</button>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    // access a state in computed function
    const counter = computed(() => store.state.counter);
    const counterNumber = computed({
      get() {
        return store.state.count;
      },
      set(newValue) {
        store.dispatch("setCountNumber", newValue);
      },
    });
    const increment = () => {
      store.dispatch("increment");
      store.dispatch("addCounterToHistory");
    };
    const decrement = () => {
      store.dispatch("decrement");
      store.dispatch("addCounterToHistory");
    };
    const addRandomNumber = () => {
      store.dispatch("addRandomNumber");
      store.dispatch("addCounterToHistory");
    };

    return { counterNumber, counter, increment, decrement, addRandomNumber };
  },
};
</script>

<style></style>
