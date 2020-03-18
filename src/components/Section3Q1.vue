<template>
  <section id="section3q1">
    <h1>Question 1/3</h1>
    <div v-if="customData.assignment == 'A'">
      <p>What are the advantages of chemical sunblock?</p>
      <input type="checkbox" name="tanning" id="uva-checkbox" />
      <label for="tanning">safe to the skin</label>
      <input type="checkbox" name="wrinkling" id="uva-checkbox" />
      <label for="wrinkling">suitable for sensitive skin</label>
      <input type="checkbox" name="sunburn" id="uva-checkbox" />
      <label for="sunburn">light texture</label>
      <input type="checkbox" name="aging" id="uva-checkbox" />
      <label for="aging">refreshing user experience</label>
    </div>
    <div v-else>
      <p>What are the advantages of physical sunblock?</p>
      <input type="checkbox" name="tanning" id="uva-checkbox" />
      <label for="tanning">safe to the skin</label>
      <input type="checkbox" name="wrinkling" id="uva-checkbox" />
      <label for="wrinkling">suitable for sensitive skin</label>
      <input type="checkbox" name="sunburn" id="uva-checkbox" />
      <label for="sunburn">light texture</label>
      <input type="checkbox" name="aging" id="uva-checkbox" />
      <label for="aging">refreshing user experience</label>
    </div>
    <button v-on:click="$emit('proceed')">Submit</button>
  </section>
</template>

<script>
export default {
  name: "Section3Q1",
  props: ["customData"]
};
</script>

<style scoped></style>
