<script setup>
import { ref, watch, computed, onMounted } from "vue";

const isDarkMode = ref(false);

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  switchTheme();
};

const switchTheme = () => {
  if (isDarkMode.value) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};

// 狀態底色
const themeStatusBg = computed(() => {
  if (isDarkMode.value) {
    return "bg-gray-700 translate-x-full";
  } else {
    return "bg-yellow-500 -translate-x-2";
  }
});

// 監聽 isDarkMode 的變化
watch(isDarkMode, () => {
  switchTheme();
});

// 初始化主题
if (localStorage.getItem("isDarkMode") === "true") {
  isDarkMode.value = true;
}
//根據使用者的模式初始
// onMounted(() => {
//   const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
//   if (matchMedia.matches) {
//     isDarkMode.value = true;
//   }
// });
</script>

<template>
  <button class="w-10 h-5 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow" @click="toggleTheme">
    <div id="switch-toggle" class="w-6 h-6 relative rounded-full transition duration-500 transform" :class="themeStatusBg">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path v-if="isDarkMode" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>
    </div>
  </button>
</template>
