<template>
  <section id="section2cover">
    <h1>Section 2</h1>
    <h1 v-if="customData.assignment == 'A'">How does UVA harm the skin?</h1>
    <h1 v-else>How does UVB harm the skin?</h1>
    <button v-on:click="$emit('proceed')">Let's start</button>
  </section>
</template>

<script>
export default {
  name: "Section2Cover",
  props: ["customData"]
};
</script>

<style scoped></style>
