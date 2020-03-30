<template>
  <section id="section2cover">
    <h1>Section 2</h1>
    <h1 v-if="customData.assignment == 'A'">How does UVA harm the skin?</h1>
    <h1 v-else>How does UVB harm the skin?</h1>
    <div v-if="customData.assignment == 'A'">
      <p>In the video, please try to think about the following two questions and you are going to discuss them with your partner. Please remeber to take notes:</p>
      <p>1. What is the harm of UVA on skins?</p>
      <p>2. Why does UVA have different harm from UVB on skins?</p>
    </div>
    <div v-else>
      <p>In the video, please try to think about the following two questions and you are going to discuss them with your partner. Please remeber to take notes:</p>
      <p>1. What is the harm of UVB on skins?</p>
      <p>2. Why does UVB have different harm from UVA on skins?</p>
    </div>
    <button v-on:click="$emit('proceed')">Let's start</button>
  </section>
</template>

<script>
export default {
  name: "Section2Cover",
  props: ["customData"]
};
</script>

<style scoped></style>
