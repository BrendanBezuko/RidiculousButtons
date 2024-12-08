<template>
  <slot> </slot>
</template>

<script setup>
function clicked() {
  if (sfc.value) {
    navigator.clipboard
      .writeText(sfc.value)
      .then(() => alert("SFC content copied to clipboard!"))
      .catch((err) => console.error("Failed to copy:", err));
  } else {
    alert("No content to copy!");
  }
}

const props = defineProps(["text", "sfc"]);

const text = ref(props.text);
const sfc = ref(props.sfc);
</script>
