<template>
  <section id="section3q2">
    <h1>Question 2/3</h1>
    <div v-if="customData.assignment == 'A'">
      <p>What might be the potential drawback of chemical blockers?</p>
      <input type="checkbox" name="tanning" id="uva-checkbox" />
      <label for="tanning">pale skin</label>
      <input type="checkbox" name="wrinkling" id="uva-checkbox" />
      <label for="wrinkling">oily skin</label>
      <input type="checkbox" name="sunburn" id="uva-checkbox" />
      <label for="sunburn">unstable</label>
      <input type="checkbox" name="aging" id="uva-checkbox" />
      <label for="aging">sensitive to some skin types</label>
    </div>
    <div v-else>
      <p>What might be the potential drawback of physical blockers?</p>
      <input type="checkbox" name="tanning" id="uva-checkbox" />
      <label for="tanning">pale skin</label>
      <input type="checkbox" name="wrinkling" id="uva-checkbox" />
      <label for="wrinkling">oily skin</label>
      <input type="checkbox" name="sunburn" id="uva-checkbox" />
      <label for="sunburn">unstable</label>
      <input type="checkbox" name="aging" id="uva-checkbox" />
      <label for="aging">sensitive to some skin types</label>
    </div>
    <button v-on:click="$emit('proceed')">Submit</button>
  </section>
</template>

<script>
export default {
  name: "Section3Q2",
  props: ["customData"]
};
</script>

<style scoped></style>
