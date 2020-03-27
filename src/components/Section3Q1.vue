<template>
  <section id="section3q1">
    <h1>Question 1/3</h1>
    <MultipleSelectQuestion
      v-if="customData.assignment == 'A'"
      v-on:feedback="onFeedback"
      v-bind:questionData="s3q1A"
    />
    <MultipleSelectQuestion v-else v-on:feedback="onFeedback" v-bind:questionData="s3q1B" />
    <p v-if="submitted">{{feedback}}</p>
    <button v-if="!submitted" v-on:click="onSubmit">Submit</button>
    <button v-if="submitted" v-on:click="$emit('proceed')">Continue</button>
  </section>
</template>

<script>
import MultipleSelectQuestion from "./MultipleSelectQuestion.vue";
export default {
  name: "Section3Q1",
  components: { MultipleSelectQuestion },
  props: ["customData"],
  data: function() {
    return {
      feedback: "Please select.",
      submitted: false,
      s3q1A: {
        qid: "s3q1-a",
        questionText: "What are the advantages of chemical sunblock?",
        choices: [
          { cid: "safe-skin", text: "safe to the skin" },
          { cid: "sensitive-skin", text: "suitable for sensitive skin" },
          { cid: "light-texture", text: "light texture" },
          { cid: "refreshing", text: "refreshing user experience" }
        ],
        correctChoices: ["light-texture", "refreshing"],
        correctFeedback: "Answer: Correct!",
        incorrectFeedback:
          "Answer: Wrong. The correct answers are light texture and refresh user experience."
      },
      s3q1B: {
        qid: "s3q1-b",
        questionText: "What are the advantages of physical sunblock?",
        choices: [
          { cid: "safe-skin", text: "safe to the skin" },
          { cid: "sensitive-skin", text: "suitable for sensitive skin" },
          { cid: "light-texture", text: "light texture" },
          { cid: "refreshing", text: "refreshing user experience" }
        ],
        correctChoices: ["safe-skin", "sensitive-skin"],
        correctFeedback: "Answer: Correct!",
        incorrectFeedback:
          "Answer: Wrong. The correct answers are safe to the skin and suitable for sensitive skin."
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
