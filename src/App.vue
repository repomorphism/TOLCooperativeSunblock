<template>
  <div id="app">
    <component v-bind:is="currentSection" v-on:proceed="onProceed" />
  </div>
</template>

<script>
import Section1Welcome from "./components/Section1Welcome.vue";
import Section1Spectrum from "./components/Section1Spectrum.vue";

export default {
  name: "App",
  components: {
    Section1Welcome,
    Section1Spectrum
  },
  data: function() {
    return {
      currentSection: "Section1Spectrum",
      sections: ["Section1Spectrum", "Section1Welcome"]
    };
  },
  methods: {
    onProceed: function() {
      let index = this.sections.indexOf(this.currentSection);
      let count = this.sections.length;
      if (index < count - 1) {
        this.currentSection = this.sections[(index + 1) % count];
      }
    }
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
</style>
