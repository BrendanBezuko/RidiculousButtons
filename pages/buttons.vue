<template>
  <div class="page">
    <div class="section">
      <h2>Animations</h2>
      <div class="section-display">
        <div class="button_container">
          <p>Grow and Shrink V1</p>
          <GrowAndShrinkV1 />
        </div>
        <div class="button_container">
          <p>Shake V1</p>
          <ShakeV1 />
        </div>
      </div>
    </div>
    <div class="section">
      <h2>Styles</h2>
      <div class="section-display">
        <div class="button_container">
          <p>Border Box V1</p>
          <BorderBoxV1 />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.section-display {
  display: flex;
  flex-direction: row;
}
</style>
