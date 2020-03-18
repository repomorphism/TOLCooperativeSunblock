<template>
  <section id="section4cover">
    <h1>Section 4</h1>
    <h1 v-if="customData.assignment == 'A'">What is SPF and how does it work?</h1>
    <h1 v-else>What is PA and how does it work?</h1>
    <button v-on:click="$emit('proceed')">Let's start</button>
  </section>
</template>

<script>
export default {
  name: "Section4Cover",
  props: ["customData"]
};
</script>

<style scoped></style>
