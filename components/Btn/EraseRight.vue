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
  background-color: rgba(0, 0, 0, 0);
  padding: 1rem;
  width: fit-content;
  height: auto;
  text-align: center;
  border-radius: 1rem;
  -webkit-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.5s ease;
  z-index: 1;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;
    -webkit-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0);
    -moz-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0);
    box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0);
    border-radius: 0;
    animation: borderRadius 0.5s linear;
  }

  // Pseudo-element
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-color: $primary;
    border-radius: 0.2rem;
  }

  &:hover::after {
    animation: eraseRight 1s forwards;
  }
}

.dark-mode {
  .btn {
    &:hover {
      animation: fadeColor 0.5s linear;
      color: $light_text;
    }
  }
}

@keyframes borderRadius {
  from {
    border-radius: 1rem;
  }
  to {
    border-radius: 0;
  }
}

@keyframes fadeColor {
  from {
    color: $dark_text;
    border-radius: 1rem;
  }
  to {
    color: $light_text;
    border-radius: 0;
  }
}

@keyframes eraseRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>
