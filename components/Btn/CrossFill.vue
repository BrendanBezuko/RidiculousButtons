<template>
  <div role="button" class="btn">{{ text || "Click" }}</div>
</template>

<script setup>
const props = defineProps(["text"]);

const text = ref(props.text);
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  color: $dark_text;
  transition: color 0.5s linear;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0);
  padding: 1rem;
  width: fit-content;
  text-align: center;
  border-radius: 1rem;
  border: $primary 5px solid;
  box-shadow: inset 0 0 0 3px #ffffff;
  -webkit-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  position: relative;
  z-index: 99;
  pointer-events: all;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: $primary;
    padding: 3rem 4rem;
    z-index: -1;
    border-radius: 4rem;
    transform: translate(90%, 90%);
    pointer-events: none;
  }

  &:hover {
    &::before {
      animation: crossFill 2s ease-out;
      transform: translate(25%, 10%);
    }
    color: $light_text;
    cursor: pointer;
  }
}

.dark-mode .btn {
  color: $light_text;

  &:hover {
    color: $dark_text;
  }
}

@keyframes crossFill {
  from {
    transform: translate(90%, 90%);
  }
  to {
    transform: translate(25%, 10%);
  }
}
</style>
