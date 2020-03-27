<template>
  <section id="section2q2">
    <h1>Question 2/2</h1>
    <MultipleChoiceQuestion v-on:feedback="onFeedback" v-bind:questionData="s2q2A" />
    <p v-if="submitted">{{feedback}}</p>
    <button v-if="!submitted" v-on:click="onSubmit">Submit</button>
    <button v-if="submitted" v-on:click="$emit('proceed')">Continue</button>
  </section>
</template>

<script>
import MultipleChoiceQuestion from "./MultipleChoiceQuestion.vue";
export default {
  name: "Section2Q2",
  components: { MultipleChoiceQuestion },
  props: ["customData"],
  data: function() {
    return {
      feedback: "Please select.",
      submitted: false,
      s2q2A: {
        qid: "s2q2-a",
        questionText:
          "Inside ultraviolet light, there are three different types of UV radiation: UVA, UVB, and UVC, which one has the longest wavelength?",
        choices: [
          { cid: "uva", text: "UVA" },
          { cid: "uvb", text: "UVB" },
          { cid: "uvc", text: "UVC" }
        ],
        correctChoice: "uva",
        correctFeedback: "Answer: Correct!",
        incorrectFeedback: "Answer: Wrong. The correct answer is UVA."
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
