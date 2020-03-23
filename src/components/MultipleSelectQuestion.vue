<template>
  <div v-bind:id="questionData.qid">
    <p>What effect would UVB bring to our skin?</p>
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
    <button v-on:click="onSubmitAnswer">Submit</button>
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
  methods: {
    onSubmitAnswer: function() {
      //
    }
  }
};
</script>

<style scoped></style>
