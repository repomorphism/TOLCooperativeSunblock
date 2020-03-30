<template>
  <section id="section3q3">
    <h1>Question 3/3</h1>
    <MultipleSelectQuestion
      v-if="customData.assignment == 'A'"
      v-on:feedback="onFeedback"
      v-bind:questionData="s3q3A"
    />
    <MultipleSelectQuestion v-else v-on:feedback="onFeedback" v-bind:questionData="s3q3B" />
    <p v-if="submitted">{{feedback}}</p>
    <button v-if="!submitted" v-on:click="onSubmit">Submit</button>
    <button v-if="submitted" v-on:click="$emit('proceed')">Continue</button>
  </section>
</template>

<script>
import MultipleSelectQuestion from "./MultipleSelectQuestion.vue";
export default {
  name: "Section3Q3",
  components: { MultipleSelectQuestion },
  props: ["customData"],
  data: function() {
    return {
      feedback: "Please select.",
      submitted: false,
      s3q3A: {
        qid: "s3q3-a",
        questionText:
          "What are the active ingredients of chemical sunblocks for absorption?",
        choices: [
          { cid: "zinc-oxide", text: "zinc oxide" },
          { cid: "titanium-oxide", text: "titanium oxide" },
          { cid: "oxybenzone", text: "oxybenzone" },
          { cid: "octinoxate", text: "octinoxate" }
        ],
        correctChoices: ["oxybenzone", "octinoxate"],
        correctFeedback: "Answer: Correct!",
        incorrectFeedback:
          "Answer: Wrong. The correct answers are oxybenzone and octinoxate."
      },
      s3q3B: {
        qid: "s3q3-b",
        questionText:
          "What are the active ingredients of physical sunblocks for reflection?",
        choices: [
          { cid: "zinc-oxide", text: "zinc oxide" },
          { cid: "titanium-oxide", text: "titanium oxide" },
          { cid: "oxybenzone", text: "oxybenzone" },
          { cid: "octinoxate", text: "octinoxate" }
        ],
        correctChoices: ["zinc-oxide", "titanium-oxide"],
        correctFeedback: "Answer: Correct!",
        incorrectFeedback:
          "Answer: Wrong. The correct answers are zinc oxide and titanium oxide."
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
