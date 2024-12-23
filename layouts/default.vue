<template>
  <div class="page">
    <Header></Header>
    <NavBar></NavBar>
    <slot></slot>
    <Notification v-if="showNotification" />
  </div>
</template>

<script setup>
import { useNotificationStore } from "~/stores/notification";
import { storeToRefs } from "pinia";

const notificationStore = useNotificationStore();
const { showNotification } = storeToRefs(notificationStore);
</script>

<style lang="scss">
.page {
  background-color: $begie;
  color: $dark_text;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  box-sizing: border-box;
  padding: 0;
}

.dark-mode .page {
  background-color: $grey;
  color: $light_text;
}
</style>
