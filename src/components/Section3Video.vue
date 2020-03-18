<template>
  <section id="section3video">
    <iframe
      width="720"
      height="405"
      v-bind:src="videoUrl"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <button v-on:click="$emit('proceed')">Continue</button>
  </section>
</template>

<script>
export default {
  name: "Section3Video",
  props: ["customData"],
  computed: {
    videoUrl: function() {
      if (this.customData.assignment == "A") {
        return "https://www.youtube.com/embed/EBqEhc2t5C8";
      } else {
        return "https://www.youtube.com/embed/zcPTSQtlxyY";
      }
    }
  }
};
</script>

<style scoped></style>
