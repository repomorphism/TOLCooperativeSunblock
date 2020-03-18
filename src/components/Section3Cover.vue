<template>
  <section id="section3cover">
    <h1>Section 3</h1>
    <h1 v-if="customData.assignment == 'A'">How chemical blockers work by absorbing the sunlight</h1>
    <h1 v-else>How physical blockers work by reflecting the sunlight</h1>
    <button v-on:click="$emit('proceed')">Let's start</button>
  </section>
</template>

<script>
export default {
  name: "Section3Cover",
  props: ["customData"]
};
</script>

<style scoped></style>
