<template>
  <section id="sectionfinalassessment">
    <h1>Final Quiz</h1>
    <p>
      Please complete the following quiz to see how well you've learned
      about sunscreen. When you're done, scroll back up, view your score, and
      check with your parter how well you both did!
    </p>
    <!-- <h1 v-if="customData.me">Your score: {{this.score}}</h1>
    <h1 v-if="customData.partner">{{customData.partner}}'s score: {{this.partnerScore}}</h1>
    <button v-on:click="onScoreSubmit">Score</button>-->
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLScgUPCwTxIgXUfObbIEgF42xg9yeO9OO3Jv2waf3I-qRc7fmA/viewform?embedded=true"
      width="640"
      height="2714"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >Loading…</iframe>
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