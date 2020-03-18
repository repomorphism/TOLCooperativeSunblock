<template>
  <section id="section2q2">
    <h1>Question 2/2</h1>
    <div v-if="customData.assignment == 'A'">
      <p>
        Inside ultraviolet light, there are three different types of UV
        radiation: UVA, UVB, and UVC, which one has the longest wavelength?
      </p>
      <input type="checkbox" name="tanning" id="uva-checkbox" />
      <label for="tanning">UVA</label>
      <input type="checkbox" name="wrinkling" id="uva-checkbox" />
      <label for="wrinkling">UVB</label>
      <input type="checkbox" name="sunburn" id="uva-checkbox" />
      <label for="sunburn">UVC</label>
    </div>
    <div v-else>
      <p>
        Inside ultraviolet light, there are three different types of UV
        radiation: UVA, UVB, and UVC, which one has the longest wavelength?
      </p>
      <input type="checkbox" name="tanning" id="uva-checkbox" />
      <label for="tanning">UVA</label>
      <input type="checkbox" name="wrinkling" id="uva-checkbox" />
      <label for="wrinkling">UVB</label>
      <input type="checkbox" name="sunburn" id="uva-checkbox" />
      <label for="sunburn">UVC</label>
    </div>
    <button v-on:click="$emit('proceed')">Submit</button>
  </section>
</template>

<script>
export default {
  name: "Section2Q2",
  props: ["customData"]
};
</script>

<style scoped></style>
