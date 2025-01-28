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
    animation: glow 2s ease-in-out infinite;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
}

@keyframes glow {
  0% {
    box-shadow: 0 0 10px 5px $primary;
  }
  50% {
    box-shadow: 0 0 20px 10px $secondary;
  }
  100% {
    box-shadow: 0 0 10px 5px $primary;
  }
}
</style>
