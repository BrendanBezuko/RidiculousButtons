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
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    animation: none;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
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
