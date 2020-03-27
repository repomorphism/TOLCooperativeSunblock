<template>
  <section id="section3video">
    <Youtube
      width="720"
      height="405"
      :video-id="videoID"
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
  name: "Section3Video",
  components: { Youtube },
  props: ["customData"],
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
  },
  computed: {
    videoID: function() {
      if (this.customData.assignment == "A") {
        return "EBqEhc2t5C8";
      } else {
        return "zcPTSQtlxyY";
      }
    }
  }
};
</script>

<style scoped></style>
