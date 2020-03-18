<template>
  <section id="section4q2">
    <h1 v-if="customData.assignment == 'A'">Question 2/3</h1>
    <h1 v-else>Question 2/2</h1>
    <div v-if="customData.assignment == 'A'">
      <p>True or false: the higher the number behind the SPF, the stronger the blocking ability would be</p>
      <input type="radio" name="true" id="spf-q2" />
      <label for="true">True</label>
      <input type="radio" name="false" id="spf-q2" />
      <label for="false">False</label>
    </div>
    <div v-else>
      <p>True or false: PA is generally marked from one plus to triple plus. The more the plus sign, the weaker it will be to block UVA.</p>
      <input type="radio" name="true" id="pa-q2" />
      <label for="true">True</label>
      <input type="radio" name="false" id="pa-q2" />
      <label for="false">False</label>
    </div>
    <button v-on:click="$emit('proceed')">Submit</button>
  </section>
</template>

<script>
export default {
  name: "Section4Q2",
  props: ["customData"]
};
</script>

<style scoped></style>
