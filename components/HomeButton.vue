<template>
  <div class="btn-container">
    <div
      :class="['btn', { 'spin-btn': isSpinning }, { 'pulse-btn': !isSpinning }]"
      role="button"
      @click="handleClick"
    >
      {{ text || "Click" }}
    </div>
  </div>
</template>

<script setup>
import { navigateTo } from "#app";

const props = defineProps({
  text: String,
});

const isSpinning = ref(false);

async function handleClick() {
  if (isSpinning.value) return;

  isSpinning.value = true;
  await nextTick();

  setTimeout(() => {
    navigateTo("/buttons");
    isSpinning.value = false;
  }, 1200);
}
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;

  color: $dark_text;
  text-decoration: none;
  background-color: $primary;
  padding: 1rem 5rem;
  margin: 3rem;
  width: fit-content;
  text-align: center;
  -webkit-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  clip-path: polygon(25% 0%, 100% 0%, 73% 100%, 0% 100%);

  &:hover {
    cursor: pointer;
  }
}

.btn-container {
  margin: 4rem;
}

.spin-btn {
  animation: rotation 1s cubic-bezier(0.66, 0.385, 0.82, 0.085);
}

.pulse-btn {
  &:hover {
    cursor: pointer;
    animation: pulse 0.4s linear;
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

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1080deg);
  }
}
</style>
