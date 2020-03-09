<template>
  <div id="app">
    <MyComp />
  </div>
</template>

<script>
import MyComp from "./components/MyComp.vue";

export default {
  name: "App",
  components: {
    MyComp
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 60px;
}

#app > p {
  font-size: 2em;
  color: blueviolet;
}
</style>
