<template>
  <div v-bind:id="questionData.qid" class="multi-select-question">
    <h2>{{questionData.questionText}}</h2>
    <div class="multi-select-choices">
      <div
        v-for="choice in choices"
        v-bind:key="questionData.qid + choice.cid"
        class="multi-select-choice"
      >
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
  computed: {
    choices: function() {
      // Hack: random order for questions with 4 or more choices (so true-false, UVA/UVB/UVC not shuffled)
      if (this.questionData.choices.length < 4) {
        return this.questionData.choices;
      }
      // shuffle https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
      const choices = this.questionData.choices.slice();
      for (let i = choices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [choices[i], choices[j]] = [choices[j], choices[i]];
      }
      return choices;
    }
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

<style>
.multi-select-question {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.multi-select-choices {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.multi-select-choice {
  display: flex;
  margin: 8px 0px 8px 0px;
  align-items: center;
}

/* checkbox */
.multi-select-choice > input {
  margin: 0px 8px 0px 8px;
}
</style>
