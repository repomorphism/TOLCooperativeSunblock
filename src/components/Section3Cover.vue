<template>
  <section id="section3cover">
    <h1>Section 3</h1>
    <h1 v-if="customData.assignment == 'A'">How chemical blockers work by absorbing the sunlight</h1>
    <h1 v-else>How physical blockers work by reflecting the sunlight</h1>
    <div v-if="customData.assignment == 'A'">
      <p>In the video, please try to think the following questions and you are going to discuss them with your partner:</p>
      <p>1. What is the main ingredient of chemical blocks?</p>
      <p>2. What are traits of chemical blocks?</p>
      <p>3. Which skins are more suitable for chemistry blocks?</p>
    </div>
    <div v-else>
      <p>In the video, please try to think the following questions and you are going to discuss them with your partner:</p>
      <p>1. What is the main ingredient of physical blocks?</p>
      <p>2. What are traits of physical blocks?</p>
      <p>3. Which skins are more suitable for physical blocks?</p>
    </div>
    <button v-on:click="$emit('proceed')">Let's start</button>
  </section>
</template>

<script>
export default {
  name: "Section3Cover",
  props: ["customData"]
};
</script>

<style scoped></style>
