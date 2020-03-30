<template>
  <section id="section3q2">
    <h1>Question 2/3</h1>
    <MultipleSelectQuestion
      v-if="customData.assignment == 'A'"
      v-on:feedback="onFeedback"
      v-bind:questionData="s3q2A"
    />
    <MultipleSelectQuestion v-else v-on:feedback="onFeedback" v-bind:questionData="s3q2B" />
    <p v-if="submitted">{{feedback}}</p>
    <button v-if="!submitted" v-on:click="onSubmit">Submit</button>
    <button v-if="submitted" v-on:click="$emit('proceed')">Continue</button>
  </section>
</template>

<script>
import MultipleSelectQuestion from "./MultipleSelectQuestion.vue";
export default {
  name: "Section3Q2",
  components: { MultipleSelectQuestion },
  props: ["customData"],
  data: function() {
    return {
      feedback: "Please select.",
      submitted: false,
      s3q2A: {
        qid: "s3q2-a",
        questionText:
          "What might be the potential drawbacks of chemical blocks?",
        choices: [
          { cid: "pale-skin", text: "pale skin" },
          { cid: "oily-skin", text: "oily skin" },
          { cid: "unstable", text: "unstable" },
          { cid: "allergic", text: "may cause allergic reactions" }
        ],
        correctChoices: ["unstable", "allergic"],
        correctFeedback:
          "Answer: Correct! Chemical blocks aborb sunlight. They are unstable in chemical structure and are sensitive to some skins.",
        incorrectFeedback:
          "Answer: Wrong. Chemical blocks aborb sunlight. They are unstable in chemical structure and are sensitive to some skins."
      },
      s3q2B: {
        qid: "s3q2-b",
        questionText:
          "What might be the potential drawbacks of physical blocks?",
        choices: [
          { cid: "pale-skin", text: "pale skin" },
          { cid: "oily-skin", text: "oily skin" },
          { cid: "unstable", text: "unstable" },
          { cid: "allergic", text: "may cause allergic reactions" }
        ],
        correctChoices: ["pale-skin", "oily-skin"],
        correctFeedback:
          "Answer: Correct!  Physical blockers will cause oily and pale skin because they are heavy in texture and are not refreshing. However, they are stable and suitble for sensitive skins.",
        incorrectFeedback:
          "Answer: Wrong. Physical blockers will cause oily and pale skin because they are heavy in texture and are not refreshing. However, they are stable and suitble for sensitive skins."
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
