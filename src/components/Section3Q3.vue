<template>
  <section id="section3q3">
    <h1>Question 3/3</h1>
    <div v-if="customData.assignment == 'A'">
      <p>What are the active ingredients of chemical sunblock for absorption?</p>
      <input type="checkbox" name="tanning" id="uva-checkbox" />
      <label for="tanning">zinc oxide</label>
      <input type="checkbox" name="wrinkling" id="uva-checkbox" />
      <label for="wrinkling">titanium oxide</label>
      <input type="checkbox" name="sunburn" id="uva-checkbox" />
      <label for="sunburn">oxybenzone</label>
      <input type="checkbox" name="aging" id="uva-checkbox" />
      <label for="aging">octinoxate</label>
    </div>
    <div v-else>
      <p>What are the active ingredients of physical sunblock for reflection?</p>
      <input type="checkbox" name="tanning" id="uva-checkbox" />
      <label for="tanning">zinc oxide</label>
      <input type="checkbox" name="wrinkling" id="uva-checkbox" />
      <label for="wrinkling">titanium oxide</label>
      <input type="checkbox" name="sunburn" id="uva-checkbox" />
      <label for="sunburn">oxybenzone</label>
      <input type="checkbox" name="aging" id="uva-checkbox" />
      <label for="aging">octinoxate</label>
    </div>
    <button v-on:click="$emit('proceed')">Submit</button>
  </section>
</template>

<script>
export default {
  name: "Section3Q3",
  props: ["customData"]
};
</script>

<style scoped></style>
