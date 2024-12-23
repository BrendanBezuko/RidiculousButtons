import { defineStore } from "pinia";

export const useNotificationStore = defineStore("notification", {
  state: () => {
    return {
      showNotification: false,
      notificationTitle: "",
      notificationText: "",
      exitAnimation: false,
      latch: false,
    };
  },
  actions: {
    notify(text, title) {
      if (this.latch == false) {
        this.latch = true;
        this.notificationText = text;
        this.notificationTitle = title;
        this.showNotification = true;
        setTimeout(() => {
          this.exitAnimation = true;
        }, 4000);
        setTimeout(() => {
          this.showNotification = false;
          this.exitAnimation = false;
          this.notificationText = "";
          this.notificationTitle = "";
          this.latch = false;
        }, 4900);
      }
    },
  },
});
