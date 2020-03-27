<template>
  <section id="section2prepare">
    <h1>Prepare for discussion</h1>
    <div v-if="customData.assignment == 'A'">
      <p>
        Now, you will have 10-minutes to prepare the 20 minutes discussion.
        Howwould you organize the next 10-min discussion to make the most of
        it? Here are some questions you can think about:
      </p>
      <p>1. What is the harm of UVA on skins?</p>
      <p>2. Why does UVA have different harm from UVB on skins?</p>
    </div>
    <div v-else>
      <p>
        Now, you will have 10-minutes to prepare the 20 minutes discussion.
        Howwould you organize the next 10-min discussion to make the most of
        it? Here are some questions you can think about:
      </p>
      <p>1. What is the harm of UVB on skins?</p>
      <p>2. Why does UVB have different harm from UVA on skins?</p>
    </div>

    <button v-on:click="$emit('proceed')">{{timerText}}</button>
    <!-- <button :disabled="remainingTime > 0" v-on:click="$emit('proceed')">{{timerText}}</button> -->
  </section>
</template>

<script>
export default {
  name: "Section2Prepare",
  props: ["customData"],
  data: function() {
    return {
      remainingTime: 60,
      interval: ""
    };
  },
  computed: {
    timerText: function() {
      if (this.remainingTime <= 0) {
        return "Continue";
      }
      let minutes = Math.floor(this.remainingTime / 60);
      let seconds = this.remainingTime % 60;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      return minutes + ":" + seconds;
    }
  },
  created() {
    this.interval = setInterval(
      function() {
        this.remainingTime -= 1;
      }.bind(this),
      1000
    );
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style scoped>
p {
  width: 530px;
}
.guiding-questions p {
  color: blueviolet;
  font-family: Helvetica;
  font-size: 15px;
  color: #f0f0f0;
  letter-spacing: 0;
  line-height: 25px;
}
</style>
