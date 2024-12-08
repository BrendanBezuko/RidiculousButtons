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
  background-color: $primary;
  padding: 1rem;
  width: fit-content;
  text-align: center;
  border-radius: 0.2rem;
  -webkit-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);

  &:hover {
    animation: shake 2s linear;
    cursor: pointer;
  }
}

.btn-container {
  margin: 4rem;
}

@keyframes shake {
  0% {
    transform: rotate(30deg) scale(1);
    background-color: $primary;
  }
  25% {
    transform: rotate(-30deg) scale(1.1);
    background-color: $secondary;
  }
  50% {
    transform: rotate(30deg) scale(0.9);
  }
  75% {
    transform: rotate(-30deg) scale(1.1);
  }
  100% {
    transform: rotate(0deg) scale(1);
    background-color: $primary;
  }
}
</style>
