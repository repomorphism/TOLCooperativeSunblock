<template>
  <section id="section4video">
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
  name: "Section4Video",
  props: ["customData"],
  computed: {
    videoUrl: function() {
      if (this.customData.assignment == "A") {
        return "https://www.youtube.com/embed/MBFm4q9JpMU";
      } else {
        return "https://www.youtube.com/embed/phwlz6Zw_QQ";
      }
    }
  }
};
</script>

<style scoped></style>
