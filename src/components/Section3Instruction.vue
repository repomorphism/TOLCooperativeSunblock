<template>
  <div id="section3instruction">
    <p>Section 3 Instruction</p>
    <button v-on:click="$emit('proceed')">Proceed</button>
  </div>
</template>

<script>
export default {
  name: "Section3Instruction"
};
</script>

<style scoped></style>
