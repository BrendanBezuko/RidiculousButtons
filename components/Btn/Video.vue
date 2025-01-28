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
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    animation: glow 2s infinite;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
}

.btn-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  border-radius: 1rem;
  transition: transform 0.3s ease;
  font-weight: 600;
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
