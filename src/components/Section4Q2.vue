<template>
  <section id="section4q2">
    <h1 v-if="customData.assignment == 'A'">Question 2/3</h1>
    <h1 v-else>Question 2/2</h1>
    <MultipleChoiceQuestion
      v-if="customData.assignment == 'A'"
      v-on:feedback="onFeedback"
      v-bind:questionData="s4q2A"
    />
    <MultipleChoiceQuestion v-else v-on:feedback="onFeedback" v-bind:questionData="s4q2B" />
    <p v-if="submitted">{{feedback}}</p>
    <button v-if="!submitted" v-on:click="onSubmit">Submit</button>
    <button v-if="submitted" v-on:click="$emit('proceed')">Continue</button>
  </section>
</template>

<script>
import MultipleChoiceQuestion from "./MultipleChoiceQuestion.vue";
export default {
  name: "Section4Q2",
  components: { MultipleChoiceQuestion },
  props: ["customData"],
  data: function() {
    return {
      feedback: "Please select.",
      submitted: false,
      s4q2A: {
        qid: "s4q2-a",
        questionText:
          "True or false: the higher the number behind the SPF, the stronger the blocking ability would be",
        choices: [
          { cid: "true", text: "True" },
          { cid: "false", text: "False" }
        ],
        correctChoice: "true",
        correctFeedback:
          "Answer: Correct.  The higher the number behind SPF, the higher its ability of blocking the sunlight.",
        incorrectFeedback:
          "Answer: Wrong.  The higher the number behind SPF, the higher its ability of blocking the sunlight."
      },
      s4q2B: {
        qid: "s4q2-b",
        questionText:
          "True or false: PA is generally marked from one plus to triple plus. The more the plus sign, the weaker it will be to block UVA.",
        choices: [
          { cid: "true", text: "True" },
          { cid: "false", text: "False" }
        ],
        correctChoice: "false",
        correctFeedback:
          "Answer: Correct. PA can block UVA and its ability will be stronger with more plus signs.",
        incorrectFeedback:
          "Answer: Wrong. PA can block UVA and its ability will be stronger with more plus signs."
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
