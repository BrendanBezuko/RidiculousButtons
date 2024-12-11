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
  background-color: $primary;
  padding: 1rem;
  width: fit-content;
  text-align: center;
  border-radius: 0.2rem;
  -webkit-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);

  &:hover {
    animation: growNShrink 1s linear;
    cursor: pointer;
  }
}

.btn-container {
  margin: 4rem;
}

@keyframes growNShrink {
  0% {
    transform: scale(0.9);
    background-color: $primary;
  }
  50% {
    transform: scale(1.2);
    background-color: $secondary;
  }
  100% {
    transform: scale(1);
    background-color: $primary;
  }
}
</style>
