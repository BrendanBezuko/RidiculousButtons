<template>
  <div class="nav-container">
    <NuxtLink class="nav-link" to="/">Home</NuxtLink>
    <NuxtLink class="nav-link" to="/about">About</NuxtLink>
    <NuxtLink class="nav-link" to="/buttons">Buttons</NuxtLink>
  </div>
</template>

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
</style>
