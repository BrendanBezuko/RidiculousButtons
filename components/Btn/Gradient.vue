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
  text-decoration: none;
  background-color: $primary;
  background: linear-gradient(45deg, $primary, $secondary);
  background-size: 200% 200%;
  padding: 1rem;
  width: fit-content;
  text-align: center;
  border-radius: 1rem;

  &:hover {
    animation: spinGradient 2s infinite;
    cursor: pointer;
  }
}

@keyframes spinGradient {
  0% {
    background-position: 0% 50%, 100% 50%;
  }
  50% {
    background-position: 100% 50%, 0% 50%;
  }
  100% {
    background-position: 0% 50%, 100% 50%;
  }
}
</style>
