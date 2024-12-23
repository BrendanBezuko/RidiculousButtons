<template>
  <div :class="{ 'slide-out': exitAnimation }" class="notification">
    <h2>{{ notificationStore.notificationTitle || "Notification" }}</h2>
    <p>
      {{
        notificationStore.notificationText ||
        "Notification body that provides detials about the notification in a long sentence"
      }}
    </p>
  </div>
</template>

<script setup>
import { useNotificationStore } from "../stores/notification";
import { storeToRefs } from "pinia";

const notificationStore = useNotificationStore();
const { exitAnimation } = storeToRefs(notificationStore);
</script>

<style lang="scss" scoped>
.notification {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 99;
  width: fit-content;
  background-color: $accent;
  padding: 2rem;
  max-width: 30vw;
  border-radius: 5px;
  margin: 0.5rem;
  box-shadow: 0 0 2px white;
  animation: slideRight 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  &::before {
    content: "";
    position: absolute;
    border-radius: 5px;
    top: 0;
    left: 0;
    width: 0.5rem;
    height: 100%;
    background-color: $primary;
    z-index: 100;
  }

  h2 {
    font-size: 1rem;
    color: $light_text;
  }
  p {
    text-align: start;
    font-size: 0.75rem;
    color: $light_text;
  }

  @media screen and (max-width: 700px) {
    width: 60vw;
    max-width: 60vw;
    left: 0;
    margin: 0 auto;
    margin-bottom: 1rem;
    padding: 0;
    border-radius: 22px;
    animation: slideUp 1s cubic-bezier(0.075, 0.82, 0.165, 1);

    &::before {
      display: none;
    }

    p {
      padding: 1rem;
      margin: 0;
      text-align: center;
    }

    h2 {
      display: none;
    }
  }
}

.slide-out {
  animation: slideOut 1s ease-out;

  @media screen and (max-width: 700px) {
    animation: slideDown 1s ease-out;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideDown {
  from {
    transform: translateY(0);
    opacity: 0;
  }
  to {
    transform: translateY(100%);
    opacity: 1;
  }
}

@keyframes slideRight {
  from {
    transform: translateX(-100vw);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOut {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>
