<template>
  <p id="namesdisplay" v-show="names">
    You are <span class="user-name">{{ names.me }}</span>
    <span v-show="names.partner">, and your partner is </span>
    <span class="user-name" v-show="names.partner">{{ names.partner }}</span>
  </p></template
>

<script>
export default {
  name: "NamesDisplay",
  props: ["names"]
};
</script>

<style>
.user-name {
  color: blueviolet;
}
</style>
