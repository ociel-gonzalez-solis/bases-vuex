<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct access: {{ $store.state.count }}</h2>
  <!-- <h2>Computed {{ countComputed }}</h2> -->
  <h1>MapState</h1>
  <h2>mapState: {{count}}</h2>
</template>

<script>
import { mapState } from "vuex";

// Formas de extraer datos del store

export default {
  // computed: mapState(['count'])
  computed: {
    countComputed() {
      // #1
      return this.$store.state.count;
    },
    // #2
    ...mapState(['count'])
    // #3
    // ...mapState({
    //   count: state => state.count
    // })
  },
};
</script>

<style>
</style>