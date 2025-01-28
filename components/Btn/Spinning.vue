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
const props = defineProps({
  text: String,
  clickHandler: {
    type: Function,
    required: false,
  },
});

const isSpinning = ref(false);

async function handleClick() {
  if (isSpinning.value) return;

  isSpinning.value = true;
  await nextTick();

  setTimeout(() => {
    //navigateTo() or other functionality can be added here
    if (props.clickHandler) {
      props.clickHandler();
    }
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
  width: fit-content;
  text-align: center;
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
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
}

.btn-container {
  margin: 4rem;
}

.spin-btn {
  animation: rotation 1s cubic-bezier(0.66, 0.385, 0.82, 0.085);
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
