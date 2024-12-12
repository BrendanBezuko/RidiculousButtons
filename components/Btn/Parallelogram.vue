<template>
  <div class="btn-container">
    <div role="button" class="btn">{{ text || "Click" }}</div>
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
  background-color: $primary;
  padding: 1rem 5rem;
  width: fit-content;
  text-align: center;
  -webkit-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  clip-path: polygon(25% 0%, 100% 0%, 73% 100%, 0% 100%);

  &:hover {
    cursor: pointer;
    animation: pulse 1s linear;
  }
}

.btn-container {
  margin: 4rem;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
