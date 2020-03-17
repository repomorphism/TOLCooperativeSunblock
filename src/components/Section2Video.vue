<template>
  <section id="section2video">
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
  name: "Section2Video",
  props: ["customData"],
  computed: {
    videoUrl: function() {
      if (this.customData.assignment == "A") {
        return "https://www.youtube.com/embed/J4b7MgMvsnU";
      } else {
        return "https://www.youtube.com/embed/DHN_JxiXx0Q";
      }
    }
  }
};
</script>

<style scoped></style>
