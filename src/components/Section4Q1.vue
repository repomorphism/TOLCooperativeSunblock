<template>
  <section id="section4q1">
    <h1 v-if="customData.assignment == 'A'">Question 1/3</h1>
    <h1 v-else>Question 1/2</h1>
    <div v-if="customData.assignment == 'A'">
      <p>What does SPF mean?</p>
      <textarea name="section4entry" id="section4entry" />
    </div>
    <div v-else>
      <p>What does PA mean?</p>
      <textarea name="section4entry" id="section4entry" />
    </div>
    <p v-if="submitted">{{feedback}}</p>
    <button v-if="!submitted" v-on:click="onSubmit">Submit</button>
    <button v-if="submitted" v-on:click="$emit('proceed')">Continue</button>
  </section>
</template>

<script>
export default {
  name: "Section4Q1",
  props: ["customData"],
  data: function() {
    return {
      submitted: false
    };
  },
  computed: {
    feedback: function() {
      if (this.customData.assignment == "A") {
        return "Answer: SPF is essentially a measure of the protection that the sunblock will provide from UVB rays before one begins to get sunburned.";
      } else {
        return "Answer: PA refers to the blocking ability of sunblock to UVA, which can prevent skin tanning and aging.";
      }
    }
  },
  methods: {
    onSubmit: function() {
      this.submitted = true;
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

textarea {
  width: 434px;
  height: 82px;
  border: 1px solid #ffffff;
  border-radius: 17px;
  background-color: #2b2f30;
  color: #ffffff;
  font-size: 14px;
  vertical-align: top;
  padding: 8px;
}
</style>
