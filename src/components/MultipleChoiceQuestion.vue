<template>
  <div v-bind:id="questionData.qid" class="multiple-choice-question">
    <h2>{{questionData.questionText}}</h2>
    <div class="multiple-choice-choices">
      <div
        v-for="choice in questionData.choices"
        v-bind:key="questionData.qid + choice.cid"
        class="multiple-choice-choice"
      >
        <input
          type="radio"
          v-bind:id="questionData.qid + choice.text"
          v-bind:name="questionData.qid + 'input'"
          :value="choice.cid"
          v-model="selectedChoice"
        />
        <label :for="questionData.qid + choice.text">{{choice.text}}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MultipleSelectQuestion",
  props: ["questionData"],
  data: function() {
    return {
      selectedChoice: ""
    };
  },
  watch: {
    selectedChoice: function() {
      let feedback = "";
      if (this.questionData.correctChoice == this.selectedChoice) {
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

<style>
.multiple-choice-question {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.multiple-choice-choices {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.multiple-choice-choice {
  display: flex;
  margin: 8px 0px 8px 0px;
  align-items: center;
}

/* radio button */
.multiple-choice-choice > input {
  margin: 0px 8px 0px 8px;
}
</style>
