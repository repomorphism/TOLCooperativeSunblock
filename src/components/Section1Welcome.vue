<template>
  <div id="section1welcome">
    <p>Section 1 Welcome</p>
    <button v-on:click="$emit('proceed')">Proceed</button>
  </div>
</template>

<script>
export default {
  name: "Section1Welcome"
};
</script>

<style scoped></style>