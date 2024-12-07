<template>
  <div class="btn-container">
    <div @click="clicked" class="btn">Click Me!</div>
  </div>
</template>

<script setup>
function clicked() {
  alert("button clicked");
}
</script>

<style lang="scss" scoped>
.btn {
  background-color: $light_background;
  padding: 1rem;
  width: fit-content;
  text-align: center;
  border-radius: 0.2rem;
  border: $primary 5px solid;
  box-shadow: inset 0 0 0 3px #ffffff;
  -webkit-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  position: relative;

  &:hover {
    color: $light_text;
    background-color: $dark_background;
    cursor: pointer;
  }
}
</style>
