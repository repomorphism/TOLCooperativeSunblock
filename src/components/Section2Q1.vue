<template>
  <section id="section2q1">
    <h1>Question 1/2</h1>
    <div v-if="customData.assignment == 'A'">
      <p>What effect would UVA bring to our skin?</p>
      <input type="checkbox" name="tanning" id="uva-checkbox" />
      <label for="tanning">Tanning</label>
      <input type="checkbox" name="wrinkling" id="uva-checkbox" />
      <label for="wrinkling">Wrinkling</label>
      <input type="checkbox" name="sunburn" id="uva-checkbox" />
      <label for="sunburn">Sunburn</label>
      <input type="checkbox" name="aging" id="uva-checkbox" />
      <label for="aging">Aging</label>
    </div>
    <div v-else>
      <p>What effect would UVB bring to our skin?</p>
      <input type="checkbox" name="tanning" id="uva-checkbox" />
      <label for="tanning">Tanning</label>
      <input type="checkbox" name="wrinkling" id="uva-checkbox" />
      <label for="wrinkling">Wrinkling</label>
      <input type="checkbox" name="sunburn" id="uva-checkbox" />
      <label for="sunburn">Sunburn</label>
      <input type="checkbox" name="aging" id="uva-checkbox" />
      <label for="aging">Aging</label>
    </div>
    <button v-on:click="$emit('proceed')">Submit</button>
  </section>
</template>

<script>
export default {
  name: "Section2Q1",
  props: ["customData"]
};
</script>

<style scoped></style>
