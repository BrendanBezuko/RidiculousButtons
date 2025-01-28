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
  -webkit-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;
    animation: shake 0.5s ease-in-out;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
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
