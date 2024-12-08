<template>
  <div class="page">
    <div class="section">
      <h2>Animations</h2>
      <div class="section-display">
        <div class="button_container">
          <p>Grow and Shrink V1</p>
          <BtnGrowAndShrinkV1 @click="clicked('GrowAndShrinkV1.vue')" />
        </div>
        <div class="button_container">
          <p>Shake V1</p>
          <BtnShakeV1 @click="clicked('ShakeV1.vue')" />
        </div>
      </div>
    </div>
    <div class="section">
      <h2>Styles</h2>
      <div class="section-display">
        <div class="button_container">
          <p>Border Box V1</p>
          <BtnBorderBoxV1 @click="clicked('BorderBoxV1.vue')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import sfcContent from "./public/sfc-content.js";

function getSFCContent(fileName) {
  console.log("Input fileName:", fileName);
  console.log("sfcContent:", sfcContent);

  const sfc = sfcContent.find((item) => item.fileName === fileName);
  if (!sfc) {
    console.error(`File ${fileName} not found.`);
    return null;
  }

  console.log("Found SFC:", sfc);
  return sfc.content;
}

function clicked(fileName) {
  let sfc = getSFCContent(fileName);

  if (sfc) {
    navigator.clipboard
      .writeText(sfc)
      .then(() => alert("SFC content copied to clipboard!"))
      .catch((err) => console.error("Failed to copy:", err));
  } else {
    alert("No content to copy!");
  }
}
</script>

<style lang="scss">
.section-display {
  display: flex;
  flex-direction: row;
}
</style>
