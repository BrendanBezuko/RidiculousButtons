<template>
  <div class="nav-container">
    <NuxtLink class="nav-link" to="/">Home</NuxtLink>
    <NuxtLink class="nav-link" to="/about">About</NuxtLink>
    <NuxtLink class="nav-link" to="/buttons">Buttons</NuxtLink>
  </div>
  <div class="colormode-container">
    <Icon
      v-if="isMounted"
      @click="toggleColorMode"
      :name="currentIcon.name"
      size="2rem"
      :color="currentIcon.color"
    />
  </div>
</template>

<script setup>
const colorMode = useColorMode();
const isMounted = ref(false);

const IconStyle = {
  light: {
    name: "tdesign:mode-light",
    color: "white",
  },
  dark: {
    name: "iconamoon:mode-dark-light",
    color: "black",
  },
};

// Computed property for dynamic icon data
const currentIcon = computed(() => {
  return colorMode.value === "light" ? IconStyle.dark : IconStyle.light;
});

// Toggle color mode
const toggleColorMode = () => {
  colorMode.preference = colorMode.value === "light" ? "dark" : "light";
};

// Ensure component logic runs after mount
onMounted(() => {
  isMounted.value = true;
});
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
  padding: 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
