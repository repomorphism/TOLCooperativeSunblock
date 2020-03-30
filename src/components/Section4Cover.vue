<template>
  <section id="section4cover">
    <h1>Section 4</h1>
    <h1 v-if="customData.assignment == 'A'">What is SPF and how does it work?</h1>
    <h1 v-else>What is PA and how does it work?</h1>
    <div v-if="customData.assignment == 'A'">
      <p>
        In the video, please try to think about the following questions and
        you are going to discuss them with your partner. Please remember to
        take notes:
      </p>
      <p>1. What is SPF? What UV does SPF work on?</p>
      <p>2. How does SPF work on the skin?</p>
    </div>
    <div v-else>
      <p>
        In the video, please try to think about the following questions and
        you are going to discuss them with your partner. Please remember to
        take notes:
      </p>
      <p>1. What is PA? What UV does PA work on?</p>
      <p>2. How does PA work on the skin?</p>
    </div>
    <button v-on:click="$emit('proceed')">Let's start</button>
  </section>
</template>

<script>
export default {
  name: "Section4Cover",
  props: ["customData"]
};
</script>

<style scoped></style>
