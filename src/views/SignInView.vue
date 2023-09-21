<script setup>
import { useRouter } from "vue-router";
console.log("useRouter:", useRouter());
const router = useRouter();
const redirectToLogin = () => {
  router.push("/");
};
</script>

<template>
  <div class="bg-cover bg-no-repeat bg-center bg-[url('@/assets/images/login_bg2.png')]">
    <div class="container flex justify-center items-center h-screen sm:px-16 rounded w-10/12 md:w-full" data-aos="zoom-in" data-aos-duration="800">
      <form action="" class="py-2 px-6 md:py-[5%] md:px-[7%] 2xl:py-14 2xl:px-20 rounded-lg text-center shadow-black/30 shadow-sm bg-gradient-to-t from-dark_mode_1/40 to-base_dark/20">
        <p class="text-primary text-[90px] md:text-[100px] mb-[-10px] lg:text-[100px] lg:mb-[-20px] leading-none bg-clip-text text-transparent bg-gradient-to-b from-accent/70 to-secondary">Climbing</p>
        <p class="text-primary text-end mr-10 font-bold leading-none bg-clip-text text-transparent bg-gradient-to-b from-accent to-secondary">gogo</p>
        <p class="tracking-[.5em] text-sm mt-10 mb-6">LET’S GET STARTED</p>
        <hr class="animate-linearGradient h-2 border-0 bg-[length:300%_300%] mb-12 bg-gradient-to-r from-secondary via-accent/70 to-primary rounded-lg" />
        <div class="mb-8">
          <label for="account" class="text-left block mb-3">EMAIL ADDRESS</label>
          <!-- <input v-model="accountInfo.account" id="account" type="text" class="w-full font-roboto bg-gray-400 text-3xl tracking-wide rounded-3xl focus:border-transparent focus:ring-white" /> -->
          <input id="account" type="text" class="w-full font-roboto bg-text_color/50 text-2xl tracking-wide rounded-3xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent pl-3" />
        </div>
        <div class="mb-10">
          <label for="pw" class="text-left block mb-3">PASSWORD</label>
          <!-- <input v-model="accountInfo.password" id="pw" type="password" class="w-full font-roboto bg-gray-400 text-3xl rounded-3xl focus:border-transparent focus:ring-white" /> -->
          <input id="pw" type="password" class="w-full font-roboto bg-text_color/50 text-2xl rounded-3xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent pl-3" />
        </div>
        <div class="mb-8 flex justify-between items-center">
          <div class="flex items-center">
            <label class="cursor-pointer label" for="remember">
              <input type="checkbox" checked="checked" class="checkbox checkbox-neutral border-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" />
              <span class="ml-2 label-text text-white">顯示密碼</span>
            </label>
          </div>
          <RouterLink class="" to="/signUp">SignUp an account</RouterLink>
        </div>
        <button class="text-xl border-transparent gradient-border-2 hover:border-gradient-r-secondary-accent-secondary-btnBg-2 rounded-lg cursor-pointer active:scale-90 px-20 py-2" @click.prevent="redirectToLogin" type="submit">Sign in</button>
      </form>
      <hr />
    </div>
  </div>
  <a href="https://zh.lovepik.com/images/png-ink-and-water-mountain.html">水墨山 Png vectors by Lovepik.com</a>
</template>
