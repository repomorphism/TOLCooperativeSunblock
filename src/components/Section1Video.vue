<template>
  <div id="section1video">
    <p>Section 1 Video</p>
    <button v-on:click="$emit('proceed')">Continue</button>
  </div>
</template>

<script>
export default {
  name: "Section1Video"
};
</script>

<style scoped></style>
