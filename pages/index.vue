<template>
  <div class="page">
    <NuxtLink class="link" to="/buttons">
      <GrowAndShrinkV1 :text="'Start Now'" />
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.link {
  text-decoration: none;
}
</style>
