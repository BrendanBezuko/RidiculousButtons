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
  padding: 1rem 5rem;
  width: fit-content;
  text-align: center;
  -webkit-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  clip-path: polygon(25% 0%, 100% 0%, 73% 100%, 0% 100%);
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;
    animation: pulse 1.3s linear;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1) scaleX(1);
  }
  50% {
    transform: scale(1.05) scaleX(1.2);
  }
  100% {
    transform: scale(1) scaleX(1);
  }
}
</style>
