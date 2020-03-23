<template>
  <section id="section2q1">
    <h1>Question 1/2</h1>
    <MultipleSelectQuestion
      v-if="customData.assignment == 'A'"
      v-on:completeQuestion="onCompleteQuestion"
      v-bind:questionData="s2q1A"
    />
    <MultipleSelectQuestion
      v-else
      v-on:completeQuestion="onCompleteQuestion"
      v-bind:questionData="s2q1A"
    />
    <button v-on:click="$emit('proceed')">Continue</button>
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
      s2q1A: {
        qid: "s2q1-a",
        choices: [
          { cid: "tanning", text: "Tanning" },
          { cid: "wrinkling", text: "Wrinkling" },
          { cid: "sunburn", text: "Sunburn" },
          { cid: "aging", text: "Aging" }
        ],
        correctChoices: ["tanning", "wrinkling", "aging"]
      }
    };
  },
  methods: {
    onCompleteQuestion: function() {
      // this.$emit("proceed");
      console.log(this.s2q1A);
    }
  }
};
</script>

<style scoped></style>
