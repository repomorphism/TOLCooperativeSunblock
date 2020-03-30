<template>
  <section id="section2q2">
    <h1>Question 2/2</h1>
    <MultipleChoiceQuestion
      v-if="customData.assignment == 'A'"
      v-on:feedback="onFeedback"
      v-bind:questionData="s2q2A"
    />
    <MultipleChoiceQuestion v-else v-on:feedback="onFeedback" v-bind:questionData="s2q2B" />
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
          "Paul went to the beach without taking sunblocks. 2 hours later, his skin got tanned. Which type of UV caused the problem?",
        choices: [
          { cid: "uva", text: "UVA" },
          { cid: "uvb", text: "UVB" },
          { cid: "uvc", text: "UVC" }
        ],
        correctChoice: "uva",
        correctFeedback:
          "Answer: Correct. UVA can reach deeper layer of the skin and cause tanning.",
        incorrectFeedback:
          "Answer: Wrong. UVA can reach deeper layer of the skin and cause tanning."
      },
      s2q2B: {
        qid: "s2q2-a",
        questionText:
          "Paul went to the beach without taking sunblocks. 2 hours later, his skin got sunburned. Which type of UV caused the problem?",
        choices: [
          { cid: "uva", text: "UVA" },
          { cid: "uvb", text: "UVB" },
          { cid: "uvc", text: "UVC" }
        ],
        correctChoice: "uvb",
        correctFeedback:
          "Answer: Correct. UVB reaches the top layer of the skin and causes sunburn. ",
        incorrectFeedback:
          "Answer: Wrong. UVB reaches the top layer of the skin and causes sunburn. "
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
