<template>
  <section id="section4discussion">
    <h1>Free discussion</h1>
    <button v-on:click="$emit('proceed')">Finish</button>
  </section>
</template>

<script>
export default {
  name: "Section4Discussion"
};
</script>

<style scoped></style>
