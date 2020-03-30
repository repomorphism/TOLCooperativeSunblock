<template>
  <section id="section3cover">
    <h1>Section 3</h1>
    <h1 v-if="customData.assignment == 'A'">How chemical blocks work by absorbing the sunlight</h1>
    <h1 v-else>How physical blocks work by reflecting the sunlight</h1>
    <div v-if="customData.assignment == 'A'">
      <p>
        In the video, please try to think about the following questions and
        you are going to discuss them with your partner. Please remember to
        take notes:
      </p>
      <p>1. How do chemical blocks work to protect skins?</p>
      <p>2. What are the main ingredients in chemical sunblocks?</p>
      <p>3. What are traits of chemical sunblocks?</p>
    </div>
    <div v-else>
      <p>
        In the video, please try to think about the following questions and
        you are going to discuss them with your partner. Please remember to
        take notes:
      </p>
      <p>1. How do physical blocks work to protect skins?</p>
      <p>2. What are the main ingredients in physical sunblocks?</p>
      <p>3. What are traits of physical sunblocks?</p>
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
