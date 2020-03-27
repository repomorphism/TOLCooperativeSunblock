<template>
  <section id="section3prepare">
    <h1>Prepare for discussion</h1>
    <p>
      Now, you will have 10-minutes to prepare the 20 minutes discussion. How
      would you organize the next 10-min discussion to make the most of it? You
      can brainstorm some questions for the discussion such as:
    </p>
    <div class="guiding-questions">
      <p>What you have learned in the previous clip?</p>
      <p>How is your method of protection the same & different from your partner's method?</p>
      <p>What’s the relative strength & weakness of each?</p>
    </div>

    <button v-on:click="$emit('proceed')">{{timerText}}</button>
    <!-- <button :disabled="remainingTime > 0" v-on:click="$emit('proceed')">{{timerText}}</button> -->
  </section>
</template>

<script>
export default {
  name: "Section3Prepare",
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
