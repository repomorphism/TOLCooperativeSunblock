<template>
  <div id="section1spectrum">
    <p>Section 1 Spectrum</p>
    <NamesDisplay v-if="customData" v-bind:names="customData" />
    <button
      v-if="customData && customData.partner"
      v-on:click="$emit('proceed')"
    >
      Proceed
    </button>
    <p v-else>
      (If you're testing, you can use two browser windows)
    </p>
  </div>
</template>

<script>
import NamesDisplay from "./NamesDisplay.vue";

export default {
  name: "Section1Spectrum",
  components: { NamesDisplay },
  props: ["customData"]
};
</script>

<style scoped></style>
