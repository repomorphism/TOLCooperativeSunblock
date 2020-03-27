<template>
  <section id="section2q1">
    <h1>Question 1/2</h1>
    <MultipleSelectQuestion
      v-if="customData.assignment == 'A'"
      v-on:feedback="onFeedback"
      v-bind:questionData="s2q1A"
    />
    <MultipleSelectQuestion v-else v-on:feedback="onFeedback" v-bind:questionData="s2q1B" />
    <p v-if="submitted">{{feedback}}</p>
    <button v-if="!submitted" v-on:click="onSubmit">Submit</button>
    <button v-if="submitted" v-on:click="$emit('proceed')">Continue</button>
  </section>
</template>

<script>
import MultipleSelectQuestion from "./MultipleSelectQuestion.vue";
export default {
  name: "Section2Q1",
  components: { MultipleSelectQuestion },
  props: ["customData"],
  data: function() {
    return {
      feedback: "Please select.",
      submitted: false,
      s2q1A: {
        qid: "s2q1-a",
        questionText: "What effect would UVA bring to our skin?",
        choices: [
          { cid: "tanning", text: "Tanning" },
          { cid: "wrinkling", text: "Wrinkling" },
          { cid: "sunburn", text: "Sunburn" },
          { cid: "aging", text: "Aging" }
        ],
        correctChoices: ["tanning", "wrinkling", "aging"],
        correctFeedback: "Answer: Correct!",
        incorrectFeedback:
          "Answer: Wrong. The correct answers are tanning, wrinkling and aging."
      },
      s2q1B: {
        qid: "s2q1-b",
        questionText: "What effect would UVB bring to our skin?",
        choices: [
          { cid: "tanning", text: "Tanning" },
          { cid: "wrinkling", text: "Wrinkling" },
          { cid: "sunburn", text: "Sunburn" },
          { cid: "aging", text: "Aging" }
        ],
        correctChoices: ["sunburn"],
        correctFeedback: "Answer: Correct!",
        incorrectFeedback: "Answer: Wrong. The correct answer is sunburn."
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
