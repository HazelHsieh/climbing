<script setup>
import DarkModeSwitcher from "@/components/tools/DarkModeSwitcher.vue";
// import { RouterLink, RouterView } from "vue-router";
import GoTop from "@/components/tools/GoTop.vue";
import { ref } from "vue";

// Dropdown
const isDropdownOpen = ref(false);
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
const closeDropdown = () => {
  isDropdownOpen.value = false;
};
</script>
<template>
  <nav class="navbar dark:bg-dark_mode_1 bg-white dark:text-white text-text_color sticky top-0 z-20">
    <div class="navbar-start">
      <div class="dropdown" @click="toggleDropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </label>
        <ul v-if="isDropdownOpen" tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 dark:bg-dark_mode_1 rounded-box w-52">
          <li>
            <RouterLink @click="closeDropdown" class="active:bg-primary active:text-black" to="/product">登山行程</RouterLink>
          </li>
          <li>
            <RouterLink @click="closeDropdown" class="active:bg-primary active:text-black" to="/article">登山知識</RouterLink>
          </li>
          <li>
            <RouterLink @click="closeDropdown" class="active:bg-primary active:text-black" to="/prepare">行前準備</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <RouterLink class="text-xl" to="/">
        <div class="w-20">
          <img class="rounded-sm" src="../assets/images/logo1.png" />
        </div>
      </RouterLink>
    </div>
    <div class="navbar-end">
      <button class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
      <DarkModeSwitcher class="mx-1" />
      <RouterLink class="btn btn-ghost btn-circle active:text-black" to="/signIn">
        <!-- <RouterLink class="btn btn-ghost btn-circle active:text-black" to="/login"> -->
        <span class="material-symbols-outlined"> account_circle </span>
      </RouterLink>
      <!-- <button class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span class="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button> -->
    </div>
  </nav>
  <div class="dark:bg-dark_mode_1 dark:text-white mx-auto text-text_color scroll-smooth">
    <main class="bg-base-100 dark:bg-dark_mode_1">
      <RouterView />
    </main>
    <GoTop />
    <footer class="bg-white dark:bg-dark_mode_1 dark:text-white text-base-content text-center mt-5">
      <div class="flex flex-col items-center mb-3">
        <figure class="flex flex-col item-center my-2 dark:bg-white rounded-sm">
          <img class="w-16" src="@/assets/images/footer.png" alt="footer" />
        </figure>
        <p class="text-md">山，會一直在那裡等你，踏上登山之旅！</p>
      </div>
      <p class="text-black/50 dark:text-white/50">Copyright © 2023 By readingNow - All right reserved. 僅學習作品用無商業行為</p>
    </footer>
  </div>
</template>
<style scoped lang="scss">
// .scrollbar::-webkit-scrollbar {
//   width: 10px;
// }
// .scrollbar::-webkit-scrollbar-thumb {
//   background-color: rgba(213, 182, 144, 0.4);
//   border-radius: 10px;
// }
</style>
