<script setup>
import { RouterView } from "vue-router";
import { NNotificationProvider, NMessageProvider, NConfigProvider, darkTheme } from "naive-ui";
const themeOverrides = {
  common: {
    primaryColor: "#D5B690",
    primaryColorHover: "#DBB380",
    primaryColorPressed: "#DBB380",
  },
};
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-message-provider>
      <n-notification-provider>
        <RouterView />
      </n-notification-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped></style>
