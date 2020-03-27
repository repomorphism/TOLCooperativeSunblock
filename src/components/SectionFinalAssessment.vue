<template>
  <section id="sectionfinalassessment">
    <h1>Final Assessment</h1>
    <h1 v-if="customData.me">Your score: {{this.score}}</h1>
    <h1 v-if="customData.partner">{{customData.partner}}'s score: {{this.partnerScore}}</h1>
    <button v-on:click="onScoreSubmit">End</button>
  </section>
</template>

<script>
export default {
  name: "SectionFinalAssessment",
  props: ["customData"],
  data: function() {
    return {
      score: 0,
      partnerScore: 0
    };
  },
  methods: {
    onScoreSubmit: function() {
      this.score += 1;
      this.customData.socket.emit("UPDATE_SCORE", this.score);
    }
  },
  mounted() {
    this.customData.socket.on("PARTNER_SCORE", data => {
      this.partnerScore = data.score;
    });
  }
};
</script>

<style scoped></style>