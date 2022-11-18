<template>
  <h4>History</h4>
  <div class="history">
    <div class="counter-history" v-for="(counter, indx) in counters" :key="indx">
        <b class="searchCounter" v-if="counter === Number(counterSearch) && Number(counterSearch.length) != 0 ">{{counter}}</b>
        <span v-else>{{counter}}</span>
    </div>
  </div>
  <input type="text" v-model="counterSearch" />
</template>

<script>
import { computed, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const counters = computed(() => store.getters.getHistory);
    const counterSearch = ref("");
    return { counters, counterSearch };
  },
};
</script>

<style>
.history {
  width: 300px;
  display: grid;
  grid-template-columns: repeat(8, minmax(1px, 1fr));
  margin: 20px auto;
}
.counter-history {
  padding: 5px;
}
.searchCounter {
    color: dodgerblue;
}
</style>
