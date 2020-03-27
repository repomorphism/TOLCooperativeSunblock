<template>
  <section id="section4q3">
    <h1 v-if="customData.assignment == 'A'">Question 3/3</h1>
    <MultipleChoiceQuestion v-on:feedback="onFeedback" v-bind:questionData="s4q3A" />
    <p v-if="submitted">{{feedback}}</p>
    <button v-if="!submitted" v-on:click="onSubmit">Submit</button>
    <button v-if="submitted" v-on:click="$emit('proceed')">Continue</button>
  </section>
</template>

<script>
import MultipleChoiceQuestion from "./MultipleChoiceQuestion.vue";
export default {
  name: "Section4Q3",
  components: { MultipleChoiceQuestion },
  props: ["customData"],
  created: function() {
    // Force proceeding when assignment is B because B doesn't have a 3rd question
    if (this.customData.assignment != "A") {
      this.$emit("proceed");
    }
  },
  data: function() {
    return {
      feedback: "Please select.",
      submitted: false,
      s4q3A: {
        qid: "s4q3-a",
        questionText:
          "For Alice if she doesn’t apply sunscreen, it only takes 20 minutes for her to get sunburn. After applying sunscreen with an SPF value of 30, how long can she stay in sunshine?",
        choices: [
          { cid: "3h", text: "3 hours" },
          { cid: "5h", text: "5 hours" },
          { cid: "9h", text: "9 hours" },
          { cid: "10h", text: "10 hours" }
        ],
        correctChoice: "10h",
        correctFeedback: "Answer: Correct! 20*30 = 600 min = 10 hours",
        incorrectFeedback:
          "Answer: Wrong. The correct answer is 10 hours. 20*30 = 600 min = 10 hours"
      }
    };
  },
  methods: {
    onSubmit: function() {
      this.submitted = true;
    },
    onFeedback: function(data) {
      this.submitted = false;
      this.feedback = data.feedback;
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 20px;
  max-width: 640px;
  width: 640px;
  text-align: start;
}
</style>
