<template>
  <div role="button" class="btn">
    <div class="btn-text">
      {{ text || "Click" }}
    </div>
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
  position: relative;

  &:hover {
    animation: glow 2s infinite;
    cursor: pointer;
  }
}

.btn-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  text-shadow: 0 0 5px white, 0 0 10px rgba(255, 255, 255, 0.5),
    0 0 10px rgba(255, 255, 255, 0.2);
  padding: 0.5rem;
  border-radius: 1rem;
}

.btn-video {
  display: block;

  max-width: 6rem;
  max-height: 6rem;
  border-radius: 1rem;
}
</style>
