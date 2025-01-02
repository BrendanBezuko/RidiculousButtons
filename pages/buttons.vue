<template>
  <div class="page">
    <p>Just click to copy the SFC and use in your own code</p>
    <div class="section">
      <h2>Hover Animations</h2>
      <p>Note: these work best on laptops and desktops.</p>
      <div class="section-display">
        <div class="btn-container">
          <p>Pulse</p>
          <BtnPulse @click="copySFCToClipBoard('Pulse.vue')" />
        </div>
        <div class="btn-container">
          <p>Shake</p>
          <BtnShake @click="copySFCToClipBoard('Shake.vue')" />
        </div>
        <div class="btn-container">
          <p>Erase Right</p>
          <BtnEraseRight @click="copySFCToClipBoard('EraseRight.vue')" />
        </div>
        <div class="btn-container">
          <p>Fill</p>
          <BtnFill @click="copySFCToClipBoard('Fill.vue')" />
        </div>
        <div class="btn-container">
          <p>Cross Fill</p>
          <BtnCrossFill @click="copySFCToClipBoard('CrossFill.vue')" />
        </div>
        <div class="btn-container">
          <p>Glow</p>
          <BtnGlow @click="copySFCToClipBoard('Glow.vue')" />
        </div>
        <div class="btn-container">
          <p>Gradient</p>
          <BtnGradient @click="copySFCToClipBoard('Gradient.vue')" />
        </div>
      </div>
    </div>
    <div class="section">
      <h2>Shapes</h2>
      <div class="section-display">
        <div class="btn-container">
          <p>Parallelogram</p>
          <BtnParallelogram @click="copySFCToClipBoard('Parallelogram.vue')" />
        </div>
        <div class="btn-container">
          <p>Blob</p>
          <BtnBlob @click="copySFCToClipBoard('Blob.vue')" />
        </div>
      </div>
    </div>
    <div class="section">
      <h2>Post Click Animations</h2>
      <p>
        Note: these pruposefully introduce a delay, but work nicely on mobile
        devices aswell
      </p>
      <div class="section-display">
        <div class="btn-container">
          <p>Spinning</p>
          <BtnSpinning
            :click-handler="() => copySFCToClipBoard('Spinning.vue')"
          />
        </div>
      </div>
    </div>
    <div class="section">
      <h2>Multi Media</h2>
      <div class="section-display">
        <div class="btn-container">
          <p>Video</p>
          <BtnVideo @click="copySFCToClipBoard('Video.vue')" />
          <p class="credit">
            Video by Jithin Mathew:
            https://www.pexels.com/video/aerial-drone-beach-waves-on-california-coast-29828942/
          </p>
        </div>
        <div class="btn-container">
          <p>Image</p>
          <BtnImage @click="copySFCToClipBoard('Image.vue')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import sfcContent from "./public/sfc-content.js";

import { useNotificationStore } from "~/stores/notification.js";
const notificationStore = useNotificationStore();

function getSFCContent(fileName) {
  const sfc = sfcContent.find((item) => item.fileName === fileName);
  if (!sfc) {
    console.error(`File ${fileName} not found.`);
    return null;
  }

  return sfc.content;
}

function copySFCToClipBoard(fileName) {
  console.log("invoked clicked function");
  let sfc = getSFCContent(fileName);

  if (sfc) {
    navigator.clipboard
      .writeText(sfc)
      .then(() => {
        if (navigator.vibrate) {
          navigator.vibrate(200);
        }
        notificationStore.notify("The SFC 📋copied📋", "Notification");
      })
      .catch((err) => console.error("Failed to copy:", err));
  } else {
    alert("No content to copy!");
  }
}
</script>

<style lang="scss" scoped>
.section-display {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;
}

.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.btn-container {
  margin: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.credit {
  font-size: xx-small;
  max-width: 20vw;
}
</style>
