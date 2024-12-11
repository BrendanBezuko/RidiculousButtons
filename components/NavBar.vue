<template>
  <div class="nav-container">
    <NuxtLink class="nav-link" to="/">Home</NuxtLink>
    <NuxtLink class="nav-link" to="/about">About</NuxtLink>
    <NuxtLink class="nav-link" to="/buttons">Buttons</NuxtLink>
  </div>
  <div class="colormode-container">
    <ClientOnly>
      <Icon
        v-if="colorMode.value === 'light'"
        @click="colorMode.preference = 'dark'"
        name="iconamoon:mode-dark-light"
        size="2rem"
        color="black"
      />
      <Icon
        v-else
        @click="colorMode.preference = 'light'"
        name="tdesign:mode-light"
        size="2rem"
        color="white"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
</script>

<style lang="scss" scoped>
.nav-container {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  margin: 0 auto;
}

.nav-link {
  text-decoration: none;

  &:hover {
    color: $secondary;
  }
}

.colormode-container {
  padding: 1rem;
}
</style>
