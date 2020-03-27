<template>
  <section id="section1video">
    <Youtube
      width="720"
      height="405"
      video-id="iokXPuCA2c0"
      @paused="onStopped"
      @ended="onStopped"
      ref="youtube"
    ></Youtube>
    <button :disabled="!watched" v-on:click="$emit('proceed')">Continue</button>
  </section>
</template>

<script>
import { Youtube } from "vue-youtube";

export default {
  name: "Section1Video",
  components: { Youtube },
  data: function() {
    return {
      watched: false
    };
  },
  methods: {
    onStopped: async function() {
      const player = this.$refs.youtube.player;
      const duration = await player.getDuration();
      const currentTime = await player.getCurrentTime();
      if (currentTime > duration * 0.9) {
        this.watched = true;
      }
    }
  }
};
</script>

<style scoped></style>
