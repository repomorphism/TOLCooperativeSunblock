<template>
  <div id="app">
    <component v-bind:is="currentSection" v-on:proceed="onProceed" v-bind:customData="customData" />
    <div v-if="!customData.partner" id="tester-message">
      <p>
        (If you're testing, you can open this page in two browser windows, or
        bypass the automatic matching and proceed as learner
        <button
          @click="setLearnerA"
          class="learner-button"
        >A</button>
        or learner
        <button @click="setLearnerB" class="learner-button">B</button>)
      </p>
    </div>
  </div>
</template>

<script>
import Section1Context from "./components/Section1Context.vue";
import Section1Video from "./components/Section1Video.vue";
import Section1Welcome from "./components/Section1Welcome.vue";
import Section2Cover from "./components/Section2Cover.vue";
import Section2Video from "./components/Section2Video.vue";
import Section2Q1 from "./components/Section2Q1.vue";
import Section2Q2 from "./components/Section2Q2.vue";
import Section2Prepare from "./components/Section2Prepare.vue";
import Section2Discussion from "./components/Section2Discussion.vue";
import Section3Cover from "./components/Section3Cover.vue";
import Section3Video from "./components/Section3Video.vue";
import Section3Q1 from "./components/Section3Q1.vue";
import Section3Q2 from "./components/Section3Q2.vue";
import Section3Q3 from "./components/Section3Q3.vue";
import Section3Prepare from "./components/Section3Prepare.vue";
import Section3Discussion from "./components/Section3Discussion.vue";
import Section4Cover from "./components/Section4Cover.vue";
import Section4Video from "./components/Section4Video.vue";
import Section4Q1 from "./components/Section4Q1.vue";
import Section4Q2 from "./components/Section4Q2.vue";
import Section4Q3 from "./components/Section4Q3.vue";
import Section4Prepare from "./components/Section4Prepare.vue";
import Section4Discussion from "./components/Section4Discussion.vue";
import SectionFinalAssessment from "./components/SectionFinalAssessment.vue";
import io from "socket.io-client";

export default {
  name: "App",
  components: {
    Section1Context,
    Section1Video,
    Section1Welcome,
    Section2Cover,
    Section2Video,
    Section2Q1,
    Section2Q2,
    Section2Prepare,
    Section2Discussion,
    Section3Cover,
    Section3Video,
    Section3Q1,
    Section3Q2,
    Section3Q3,
    Section3Prepare,
    Section3Discussion,
    Section4Cover,
    Section4Video,
    Section4Q1,
    Section4Q2,
    Section4Q3,
    Section4Prepare,
    Section4Discussion,
    SectionFinalAssessment
  },
  data: function() {
    // const socket = io("localhost:3000");
    const socket = io("wss://mighty-dawn-11508.herokuapp.com");
    return {
      socket,
      currentSection: "Section1Context",
      sections: [
        "Section1Context",
        "Section1Video",
        "Section1Welcome",
        "Section2Cover",
        "Section2Video",
        "Section2Q1",
        "Section2Q2",
        "Section2Prepare",
        "Section2Discussion",
        "Section3Cover",
        "Section3Video",
        "Section3Q1",
        "Section3Q2",
        "Section3Q3",
        "Section3Prepare",
        "Section3Discussion",
        "Section4Cover",
        "Section4Video",
        "Section4Q1",
        "Section4Q2",
        "Section4Q3",
        "Section4Prepare",
        "Section4Discussion",
        "SectionFinalAssessment"
      ],
      customData: { socket }
    };
  },
  methods: {
    onProceed: function() {
      let index = this.sections.indexOf(this.currentSection);
      let count = this.sections.length;
      if (index < count - 1) {
        this.currentSection = this.sections[(index + 1) % count];
      }
    },
    setLearnerA: function() {
      this.customData = {
        me: "Learner A",
        partner: "Learner B",
        assignment: "A"
      };
    },
    setLearnerB: function() {
      this.customData = {
        me: "Learner B",
        partner: "Learner A",
        assignment: "B"
      };
    }
  },
  mounted() {
    this.socket.on("USER_PAIR", data => {
      // Fields: me, partner
      this.customData = data;
      // Add field: assignment
      if (data.me && data.partner) {
        this.customData.assignment = data.me > data.partner ? "A" : "B";
      }
      // Lazy implementation, throw the socket down for child to use also
      // this.customData.socket = this.socket;
    });
  }
};
</script>

<style>
body {
  background-image: url("assets/background.png");
}

#app {
  font-family: HelveticaNeue-Medium;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: #ffffff;
  margin-top: 60px;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#tester-message {
  display: flex;
  justify-content: center;
}

#tester-message > p {
  text-align: center;
}

h1 {
  font-size: 30px;
  letter-spacing: 0;
  line-height: 45px;
  max-width: 500px;
}

h2 {
  font-size: 17px;
  max-width: 600px;
  text-align: start;
}

p {
  letter-spacing: 0;
  line-height: 45px;
  max-width: 530px;
  font-size: 15px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 30px;
  text-align: start;
}

button {
  width: 232px;
  height: 50px;
  border-radius: 10px;
  font-family: Helvetica;
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 0;
  margin: 16px 16px 16px 16px;
  background-color: #89a6ff;
  border: none;
}

button:disabled {
  background-color: #989898;
}

.learner-button {
  width: auto;
  height: auto;
  border-radius: 2px;
  font-size: 15px;
  margin: 0;
}
</style>
