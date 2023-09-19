<script setup>
import { RouterView } from "vue-router";
import { NNotificationProvider, NMessageProvider, NConfigProvider, darkTheme } from "naive-ui";
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-message-provider>
      <n-notification-provider>
        <RouterView />
      </n-notification-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped></style>
