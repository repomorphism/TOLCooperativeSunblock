<template>
  <div id="section4instruction">
    <p>Section 4 Instruction</p>
    <button v-on:click="$emit('proceed')">Proceed</button>
  </div>
</template>

<script>
export default {
  name: "Section4Instruction"
};
</script>

<style scoped></style>
