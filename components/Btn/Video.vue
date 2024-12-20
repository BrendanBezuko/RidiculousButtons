<template>
  <div role="button" class="btn">
    <video autoplay muted loop class="btn-video">
      <source src="/btnwaves.mp4" type="video/mp4" />
    </video>
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
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0)
  );
  text-shadow: 0 0 5px white;
  padding: 0.5rem;
  border-radius: 1rem;
}

.btn-video {
  display: block;

  max-width: 6rem;
  max-height: 6rem;
  border-radius: 1rem;
}

@keyframes glow {
  0% {
    box-shadow: 0 0 5px 2px $primary;
  }
  50% {
    box-shadow: 0 0 10px 5px $secondary;
  }
  100% {
    box-shadow: 0 0 5px 2px $primary;
  }
}
</style>
