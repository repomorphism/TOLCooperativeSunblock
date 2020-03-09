<template>
  <div id="app">
    <component
      v-bind:is="currentSection"
      v-on:proceed="onProceed"
      v-bind:customData="customData"
    />
  </div>
</template>

<script>
import Section1Welcome from "./components/Section1Welcome.vue";
import Section1Spectrum from "./components/Section1Spectrum.vue";
import Section2Instruction from "./components/Section2Instruction.vue";
import Section2UVAB from "./components/Section2UVAB.vue";
import Section2Formative from "./components/Section2Formative.vue";
import Section2Discussion from "./components/Section2Discussion.vue";
import Section3Instruction from "./components/Section3Instruction.vue";
import Section3Chemicals from "./components/Section3Chemicals.vue";
import Section3Formative from "./components/Section3Formative.vue";
import Section3Discussion from "./components/Section3Discussion.vue";
import Section4Instruction from "./components/Section4Instruction.vue";
import Section4PASPF from "./components/Section4PASPF.vue";
import Section4Formative from "./components/Section4Formative.vue";
import Section4Discussion from "./components/Section4Discussion.vue";
import SectionFinalAssessment from "./components/SectionFinalAssessment.vue";
import io from "socket.io-client";

export default {
  name: "App",
  components: {
    Section1Spectrum,
    Section1Welcome,
    Section2Instruction,
    Section2UVAB,
    Section2Formative,
    Section2Discussion,
    Section3Instruction,
    Section3Chemicals,
    Section3Formative,
    Section3Discussion,
    Section4Instruction,
    Section4PASPF,
    Section4Formative,
    Section4Discussion,
    SectionFinalAssessment
  },
  data: function() {
    return {
      // socket: io("localhost:3000"),
      socket: io("ws://mighty-dawn-11508.herokuapp.com"),
      currentSection: "Section1Spectrum",
      sections: [
        "Section1Spectrum",
        "Section1Welcome",
        "Section2Instruction",
        "Section2UVAB",
        "Section2Formative",
        "Section2Discussion",
        "Section3Instruction",
        "Section3Chemicals",
        "Section3Formative",
        "Section3Discussion",
        "Section4Instruction",
        "Section4PASPF",
        "Section4Formative",
        "Section4Discussion",
        "SectionFinalAssessment"
      ],
      customData: null
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
  },
  mounted() {
    this.socket.on("USER_PAIR", data => {
      this.customData = data;
    });
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
