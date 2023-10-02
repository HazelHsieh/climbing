<script setup>
import axios from "axios";
import { useRouter } from "vue-router";
import { ref } from "vue";
const { VITE_APP_URL } = import.meta.env;
const router = useRouter();

const userInfo = {
  username: "",
  password: "",
};

const showSuccess = ref(false); // 登入成功提示窗
const showError = ref(false); // 登入失敗提示窗

const redirectToLogin = async () => {
  if (userInfo.username !== "" && userInfo.password !== "") {
    try {
      const response = await axios.post(`${VITE_APP_URL}admin/signin`, userInfo);

      if (response.status === 200) {
        showSuccess.value = true; // 顯示成功提示窗
        const data = response.data;
        const { token, expired } = data;
        // console.log(token, expired);
        document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
        // router.push('/backend/products');
        setTimeout(() => {
          showSuccess.value = false;
          router.push("/backend/products");
        }, 2000);
      } else {
        console.error("API請求失敗:", response.status);
        showError.value = true; // 顯示失敗提示窗
      }
    } catch (error) {
      console.error("API請求錯誤:", error);
      showError.value = true; // 顯示失敗提示窗
    }
    setTimeout(() => {
      showSuccess.value = false;
      showError.value = false;
    }, 2000);
    userInfo.username = "";
    userInfo.password = "";
  }
};
</script>

<template>
  <div class="bg-cover bg-no-repeat bg-center bg-[url('@/assets/images/login_bg2.png')]">
    <div class="container flex justify-center items-center h-screen sm:px-16 rounded w-10/12 md:w-full" data-aos="zoom-in" data-aos-duration="800">
      <form action="" class="py-2 px-6 md:py-[5%] md:px-[7%] 2xl:py-14 2xl:px-20 rounded-lg text-center shadow-black/30 shadow-sm bg-gradient-to-t from-dark_mode_1/40 to-base_dark/20" @click.prevent="redirectToLogin">
        <p class="text-primary text-[90px] md:text-[100px] mb-[-10px] lg:text-[100px] lg:mb-[-20px] leading-none bg-clip-text text-transparent bg-gradient-to-b from-accent/70 to-secondary">Climbing</p>
        <p class="text-primary text-end mr-10 font-bold leading-none bg-clip-text text-transparent bg-gradient-to-b from-accent to-secondary">gogo</p>
        <p class="tracking-[.5em] text-sm mt-10 mb-6">LET’S GET STARTED</p>
        <hr class="animate-linearGradient h-2 border-0 bg-[length:300%_300%] mb-12 bg-gradient-to-r from-secondary via-accent/70 to-primary rounded-lg" />
        <div class="mb-8">
          <label for="username" class="text-left block mb-3">EMAIL ADDRESS</label>
          <!-- <input v-model="accountInfo.account" id="account" type="text" class="w-full font-roboto bg-gray-400 text-3xl tracking-wide rounded-3xl focus:border-transparent focus:ring-white" /> -->
          <input v-model="userInfo.username" id="username" type="email" class="w-full font-roboto bg-text_color/50 text-2xl tracking-wide rounded-3xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent pl-3" autocomplete="username" />
        </div>
        <div class="mb-10">
          <label for="password" class="text-left block mb-3">PASSWORD</label>
          <!-- <input v-model="accountInfo.password" id="pw" type="password" class="w-full font-roboto bg-gray-400 text-3xl rounded-3xl focus:border-transparent focus:ring-white" /> -->
          <input v-model="userInfo.password" id="password" type="password" class="w-full font-roboto bg-text_color/50 text-2xl rounded-3xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent pl-3" autocomplete="current-password" />
        </div>
        <div class="mb-8 flex justify-between items-center">
          <div class="flex items-center">
            <label class="cursor-pointer label" for="show-password">
              <input id="show-password" type="checkbox" checked="checked" class="checkbox checkbox-neutral border-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" />
              <span class="ml-2 label-text text-white">顯示密碼</span>
            </label>
          </div>
          <RouterLink class="" to="/">回到主頁</RouterLink>
        </div>
        <!-- 提示窗 -->
        <div v-if="showSuccess" class="mb-4 alert alert-success text-white/90 p-1">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>登入成功</span>
          </div>
        </div>
        <div v-if="showError" class="mb-4 alert alert-error p-1">
          <div class="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span class="">登入失敗，請檢查帳號和密碼</span>
          </div>
        </div>
        <button class="text-xl border-transparent gradient-border-2 hover:border-gradient-r-secondary-accent-secondary-btnBg-2 rounded-lg cursor-pointer active:scale-90 px-20 py-2" type="submit">Sign in</button>
      </form>
      <hr />
    </div>
  </div>
  <a href="https://zh.lovepik.com/images/png-ink-and-water-mountain.html">水墨山 Png vectors by Lovepik.com</a>
</template>
