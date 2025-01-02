<template>
  <div class="nav-container">
    <div class="links-container">
      <NuxtLink class="nav-link" to="/">Home</NuxtLink>
      <NuxtLink class="nav-link" to="/about">About</NuxtLink>
      <NuxtLink class="nav-link" to="/buttons">Buttons</NuxtLink>
    </div>
    <Icon
      class="icon"
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
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 2rem;
  background-color: $begie;
  z-index: 9999;
}

.dark-mode .nav-container {
  background-color: $grey;
}

.links-container {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
}

.nav-link {
  text-decoration: none;

  &:hover {
    color: $secondary;
  }
}

.icon {
  margin: 0 1rem;
}
</style>
