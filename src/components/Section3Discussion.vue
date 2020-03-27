<template>
  <section id="section3discussion">
    <h1>Free discussion</h1>
    <button v-on:click="$emit('proceed')">Finish</button>
  </section>
</template>

<script>
export default {
  name: "Section3Discussion"
};
</script>

<style scoped></style>
