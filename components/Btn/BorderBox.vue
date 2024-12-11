<template>
  <div class="btn-container">
    <div class="btn">{{ text || "Click" }}</div>
  </div>
</template>

<script setup>
const props = defineProps(["text"]);

const text = ref(props.text);
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  color: $dark_text;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0);
  padding: 1rem;
  width: fit-content;
  text-align: center;
  border-radius: 2rem;
  border: $primary 5px solid;
  box-shadow: inset 0 0 0 3px #ffffff;
  -webkit-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  &:hover {
    color: $light_text;
    background-color: $primary;
    cursor: pointer;
  }
}

.dark-mode {
  .btn {
    color: $light_text;

    &:hover {
      color: $dark_text;
      background-color: $primary;
      cursor: pointer;
    }
  }
}
</style>
