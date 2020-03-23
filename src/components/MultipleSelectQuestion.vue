<template>
  <div v-bind:id="questionData.qid">
    <p>{{questionData.questionText}}</p>
    <div v-for="choice in questionData.choices" v-bind:key="questionData.qid + choice.cid">
      <input
        type="checkbox"
        v-bind:id="questionData.qid + choice.text"
        v-bind:name="questionData.qid + 'input'"
        :value="choice.cid"
        v-model="selectedChoices"
      />
      <label :for="questionData.qid + choice.text">{{choice.text}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "MultipleSelectQuestion",
  props: ["questionData"],
  data: function() {
    return {
      selectedChoices: []
    };
  },
  watch: {
    selectedChoices: function() {
      let feedback = "";
      if (
        this.questionData.correctChoices.sort().join(",") ==
        this.selectedChoices
          .concat()
          .sort()
          .join(",")
      ) {
        feedback = this.questionData.correctFeedback;
      } else {
        feedback = this.questionData.incorrectFeedback;
      }
      this.$emit("feedback", {
        qid: this.questionData.qid,
        feedback
      });
    }
  }
};
</script>

<style scoped></style>
