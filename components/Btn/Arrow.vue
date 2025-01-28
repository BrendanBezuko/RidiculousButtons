<template>
  <div role="button" class="btn">
    <span>{{ text || "Click" }}</span>
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
  padding: 1rem 3rem;
  width: fit-content;
  text-align: center;
  -webkit-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0 100%, 0 0);

  &:hover {
    cursor: pointer;
    animation: narrow 1.3s ease-in;
    clip-path: polygon(33% 0, 100% 50%, 32% 100%, 33% 100%, 33% 0);
    transform: translate(10%, 0%);
  }
}

@keyframes narrow {
  0% {
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0 100%, 0 0);
    transform: translate(0%, 0%);
  }
  100% {
    transform: translate(0%, 0%);
    clip-path: polygon(33% 0, 100% 50%, 32% 100%, 33% 100%, 33% 0);
  }
  100% {
    clip-path: polygon(33% 0, 100% 50%, 32% 100%, 33% 100%, 33% 0);
    transform: translate(10%, 0%);
  }
}

.btn span {
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}
</style>
