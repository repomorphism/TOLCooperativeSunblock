<template>
  <div id="section1spectrum">
    <p>Section 1 Spectrum</p>
    <button v-on:click="$emit('proceed')">Proceed</button>
  </div>
</template>

<script>
export default {
  name: "Section1Spectrum"
};
</script>

<style scoped></style>