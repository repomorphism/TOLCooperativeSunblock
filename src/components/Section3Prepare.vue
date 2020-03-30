<template>
  <section id="section3prepare">
    <h1>Prepare for discussion</h1>
    <div v-if="customData.assignment == 'A'">
      <p>
        Now, you will have 1 minute to prepare for a 5-minute discussion. How
        would you organize the discussion to make the most of it? You can
        brainstorm some questions for the discussion such as:
      </p>
      <p>1. How do chemical blocks work to protect skins?</p>
      <p>2. What is the main ingredients in chemical sunblocks?</p>
      <p>3. What are traits of chemical sunblocks?</p>
    </div>
    <div v-else>
      <p>
        Now, you will have 1 minute to prepare for a 5-minute discussion. How
        would you organize the discussion to make the most of it? You can
        brainstorm some questions for the discussion such as:
      </p>
      <p>1. How do physical blocks work to protect skins?</p>
      <p>2. What is the main ingredients in physical sunblocks?</p>
      <p>3. What are traits of physical sunblocks?</p>
    </div>

    <button v-on:click="$emit('proceed')">{{timerText}}</button>
    <!-- <button :disabled="remainingTime > 0" v-on:click="$emit('proceed')">{{timerText}}</button> -->
  </section>
</template>

<script>
export default {
  name: "Section3Prepare",
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
</style>
