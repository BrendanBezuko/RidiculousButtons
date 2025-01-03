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
  width: fit-content;
  text-align: center;
  border-radius: 1rem;
  padding: 1rem 4rem;
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0), $secondary),
    url("/mountains.webp");
  background-size: cover;
  position: relative;
  box-shadow: inset 0 0 0 3px #ffffff;
  -webkit-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);

  &::before {
    content: "";
    background: rgba(255, 255, 255, 0.5);
    padding: 1rem 3rem;
    border-radius: 0.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  span {
    position: relative;
    z-index: 2;
  }

  &:hover {
    cursor: pointer;

    &::before {
      animation: grow 0.5s linear;
    }
  }
}

@keyframes grow {
  0% {
    padding: 1rem 3rem;
  }
  50% {
    padding: 1.1rem 3.2rem;
  }
  100% {
    padding: 1rem 3rem;
  }
}
</style>
