<template>
  <div id="section3discussion">
    <h1>Free discussion</h1>
    <button v-on:click="$emit('proceed')">Finish</button>
  </div>
</template>

<script>
export default {
  name: "Section3Discussion"
};
</script>

<style scoped></style>
