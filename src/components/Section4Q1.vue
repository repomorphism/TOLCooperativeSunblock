<template>
  <section id="section4q1">
    <h1 v-if="customData.assignment == 'A'">Question 1/3</h1>
    <h1 v-else>Question 1/2</h1>
    <div v-if="customData.assignment == 'A'">
      <p>What does SPF mean?</p>
      <input type="text" name="section4entry" id="section4entry" />
    </div>
    <div v-else>
      <p>What does PA mean?</p>
      <input type="text" name="section4entry" id="section4entry" />
    </div>
    <button v-on:click="$emit('proceed')">Submit</button>
  </section>
</template>

<script>
export default {
  name: "Section4Q1",
  props: ["customData"]
};
</script>

<style scoped></style>
