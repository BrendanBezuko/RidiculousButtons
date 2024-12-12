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

  &:hover {
    animation: glow 2s infinite;
    cursor: pointer;
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
