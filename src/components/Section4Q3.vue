<template>
  <section id="section4q3">
    <h1 v-if="customData.assignment == 'A'">Question 3/3</h1>
    <div v-if="customData.assignment == 'A'">
      <p>
        For Alice if she doesn’t apply sunscreen, it only takes 20 minutes
        for her to get sunburn. After applying sunscreen with an SPF value of
        30, how long can she stay in sunshine?
      </p>
      <input type="radio" name="pa-q3" id="3h" />
      <label for="3h">3 hours</label>
      <input type="radio" name="pa-q3" id="5h" />
      <label for="5h">5 hours</label>
      <input type="radio" name="pa-q3" id="9h" />
      <label for="9h">9 hours</label>
      <input type="radio" name="pa-q3" id="10h" />
      <label for="10h">10 hours</label>
    </div>
    <button v-on:click="$emit('proceed')">Submit</button>
  </section>
</template>

<script>
export default {
  name: "Section4Q3",
  props: ["customData"],
  created: function() {
    // Force proceeding when assignment is A because A doesn't have a 3rd question
    if (this.customData.assignment != "A") {
      this.$emit("proceed");
    }
  }
};
</script>

<style scoped></style>
