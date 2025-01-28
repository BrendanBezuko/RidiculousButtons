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
  transition: all 0.3s ease;
  overflow: hidden;

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
    transition: all 0.3s ease;
  }

  span {
    position: relative;
    z-index: 2;
    font-weight: 600;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 15px 15px 40px -3px rgba(0, 0, 0, 0.6);

    &::before {
      background: rgba(255, 255, 255, 0.6);
      padding: 1.1rem 3.2rem;
    }

    span {
      transform: scale(1.05);
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 10px 10px 30px -3px rgba(0, 0, 0, 0.5);
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
