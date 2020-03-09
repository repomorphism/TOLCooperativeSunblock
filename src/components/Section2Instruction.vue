<template>
  <div id="section2instruction">
    <p>Section 2 Instruction</p>
    <button v-on:click="$emit('proceed')">Proceed</button>
  </div>
</template>

<script>
export default {
  name: "Section2Instruction"
};
</script>

<style scoped></style>
