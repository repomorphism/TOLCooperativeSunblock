<template>
  <div id="section2discussion">
    <p>Section 2 Discussion</p>
    <button v-on:click="$emit('proceed')">Proceed</button>
  </div>
</template>

<script>
export default {
  name: "Section2Discussion"
};
</script>

<style scoped></style>
