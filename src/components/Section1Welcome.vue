<template>
  <section id="section1welcome">
    <h1>Welcome to the JigSaw activity!</h1>
    <p>
      In this video, you will watch three clips different from your partner.
      After each clip, you will discuss and share what you have learned with
      your partner. As your partner is totally dependent on you to understand
      the knowledge component, make sure you can deliver the key content to him
      / her in a clear and correct way.
    </p>
    <button v-on:click="$emit('proceed')">Let's start</button>
  </section>
</template>

<script>
export default {
  name: "Section1Welcome"
};
</script>

<style scoped></style>
