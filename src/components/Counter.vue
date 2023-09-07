<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct access: {{ $store.state.counter.count }}</h2>
  <!-- <h2>Computed {{ countComputed }}</h2> -->
  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="incrementByRandom">Random</button>
  <!-- <button @click="incrementByRandom20">Random 20</button> -->
  <button @click="incrementRandomInt" :disabled="isLoading">Random 20</button>

  <h1>MapState</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>LastMutation {{lastMutation}}</h2>

  <h2>Direct getter {{$store.getters['counter/squareCount']}}</h2>
</template>

<script>
import { mapActions, mapState } from "vuex";

// Formas de extraer datos del store

export default {
  // computed: mapState(['count'])
  computed: {
    // #1
    // countComputed() {
    //   return this.$store.state.count; // Sin modulo
    //   return this.$store.state.counter.count; // COn modulo
    // },
    // #2
    ...mapState('counter', ["count", "lastMutation", "isLoading"]),
    /**
    ...mapState(
      count       : state => state.count,
      lastMutation: state => state.lastMutation
    ),
     *
    */
    // #3
    // ...mapState({
    //   count: state => state.count
    // })
  },
  methods: {
    increment() {
      this.$store.commit("counter/increment");
    },
    incrementBy() {
      this.$store.commit("counter/incrementBy", 5);
    },
    incrementByRandom() {
      const rand = parseInt(Math.floor(Math.random() * 100) + 1);
      this.$store.commit("counter/incrementByRandom", rand);
    },
    incrementByRandom20() {
      // this.$store.dispatch("incrementRandomInt");
      this.incrementRandomInt();
    },
    // ...mapActions('counter', ["incrementRandomInt"]),
    ...mapActions('counter', {
      incrementRandomInt: 'incrementRandomInt'
    }),
  },
};
</script>

<style>
</style>