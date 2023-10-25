<script setup>
// import { ref, onMounted } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import category1Image from "@/assets/images/Mountain/郡大山01.jpg";
import category1HoverImage from "@/assets/images/Mountain/郡大山03.png";
import category2Image from "@/assets/images/Mountain/奇萊南峰01.png";
import category2HoverImage from "@/assets/images/Mountain/奇萊南峰02.jpg";
import category3Image from "@/assets/images/Mountain/嘉明湖01.png";
import category3HoverImage from "@/assets/images/Mountain/嘉明湖02.jpg";

const router = useRouter();
const toCategory = (tag) => {
  router.push({
    name: "product",
    query: { category: tag },
  });
};

const isHovering = ref({ 1: false, 2: false, 3: false });

const setHovering = (item) => {
  for (let i = 1; i <= 3; i++) {
    isHovering.value[i] = i === item;
  }
};

// import Loading from "vue-loading-overlay";

// const isLoading = ref(true);
// onMounted(() => {
//   setTimeout(() => {
//     isLoading.value = false;
//   }, 1000);
// });
</script>

<template>
  <!-- <loading :active="isLoading" loader="bars" :height="100" :width="150" color="#DBB380" background-color="black" /> -->
  <section class="">
    <div class="hero min-h-screen bg-[url('@/assets/images/banner.png')]">
      <div class="hero-overlay bg-opacity-10 dark:bg-opacity-20"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <p class="mb-2 text-5xl font-bold">登山活動</p>
          <p class="mb-5">期待發現新的景色和挑戰自己的極限嗎?</p>
          <p class="mb-5 text-6xl font-bold tracking-widest text-gradient">OUTDOOR</p>
          <div class="text-white/90">
            <p class="mb-2">探索更多</p>
            <span class="material-symbols-outlined animate-bounce"> keyboard_double_arrow_down </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="h-1 bg-gradient-to-b from-black/70 dark:from-black/20 mb-5"></div>
  <!-- 探索不同體驗 -->
  <section class="container bg-white dark:bg-dark_mode_2 p-5 mb-10">
    <p class="text-xl text-center pb-5">探索不同體驗</p>
    <ul class="flex flex-wrap gap-10">
      <li class="flex flex-col sm:flex-row justify-center items-center">
        <div data-aos="fade-left" data-aos-duration="1000" class="w-full sm:w-1/2 block sm:hidden relative">
          <!-- 1. -->
          <!-- <figure class="p-1 border-2 border-black-400 rounded-md">
            <img class="rounded-md" src="@/assets/images/Mountain/郡大山01.jpg" alt="郡大山01">
          </figure> -->
          <!-- 2. -->
          <div @mouseenter="setHovering(1)" @mouseleave="setHovering(0)" class="card shadow-xl rounded-sm">
            <figure class="pr-5 pb-3">
              <img :src="isHovering[1] ? category1HoverImage : category1Image" class="rounded-sm" alt="郡大山01" />
            </figure>
            <!-- <div class="">
              <h2 class="text-end text-2xl mr-5">輕鬆爬爬</h2>
            </div> -->
          </div>
          <div class="absolute bottom-0 right-4 z-10">
            <p class="text-end mr-5 text-2xl text-black/70 bg-white/50 px-2 shadow-md">輕鬆爬爬</p>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="1000" class="w-full sm:w-1/2 p-5">
          <p class="px-1 tracking-wide">輕鬆爬爬，是一場輕鬆而充實的山行體驗。無需花費太多的時間，半天至一天的行程即可完成。這是一個適合所有人的選擇，不論你是初次嘗試登山，還是希望度過一個輕鬆的週末。在輕鬆爬爬中，你可以欣賞到大自然的美麗風景，同時也感受到輕鬆的快樂。</p>
          <br />
          <!-- <div class="flex items-end">
          </div> -->
          <a href="#" @click.prevent="toCategory('輕鬆爬爬')" class="group flex justify-end items-end text-end mr-7">
            <span class="group-hover:bg-sky-50 group-hover:rounded group-hover:delay-1000">立刻探索</span>
            <span class="w-4 group-hover:hidden"> </span>
            <span class="material-icons text-sm group-hover:bg-sky-50 hidden group-hover:block group-hover:bg-sky-50 group-hover:rounded group-hover:delay-150">trending_flat</span>
          </a>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" class="w-full sm:w-1/2 hidden sm:block relative">
          <!-- 1. -->
          <!-- <figure class="p-1 border-2 border-black-400 rounded-md">
            <img class="rounded-md" src="@/assets/images/Mountain/郡大山01.jpg" alt="郡大山01">
          </figure> -->
          <!-- 2. -->
          <div @mouseenter="setHovering(1)" @mouseleave="setHovering(0)" class="card shadow-xl rounded-sm">
            <figure class="pr-5 pb-3">
              <img :src="isHovering[1] ? category1HoverImage : category1Image" alt="郡大山01" class="rounded-sm" />
            </figure>
            <!-- <div class="">
              <h2 class="text-end text-2xl mr-5">輕鬆爬爬</h2>
            </div> -->
          </div>
          <div class="absolute bottom-0 right-4 z-10">
            <p class="text-end mr-5 text-2xl text-black/70 bg-white/50 px-2 shadow-md">輕鬆爬爬</p>
          </div>
        </div>
      </li>
      <li class="flex flex-col sm:flex-row justify-center items-center">
        <div data-aos="fade-right" data-aos-duration="2000" class="w-full sm:w-1/2 relative">
          <div @mouseenter="setHovering(2)" @mouseleave="setHovering(0)" class="card shadow-xl rounded-sm">
            <figure class="pr-5 pb-3">
              <img :src="isHovering[2] ? category2HoverImage : category2Image" alt="奇萊南峰01" class="rounded-sm" />
            </figure>
          </div>
          <div class="absolute bottom-0 right-4 z-10">
            <p class="text-end mr-5 text-2xl text-black/70 bg-white/50 px-2 shadow-md">流汗爬爬</p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="2000" class="w-full sm:w-1/2 p-5">
          <p class="px-5 tracking-wide">流汗爬爬，給你帶來更多的挑戰和冒險。除了一天的行程外，你還可以選擇兩天一夜來享受山區的美景。這條路線可能需要更多的體力，但你會發現，汗水是通向美麗景點的代價。流汗爬爬讓你有機會欣賞不同的風景，同時也留下了寶貴的回憶。</p>
          <br />
          <a href="" @click.prevent="toCategory('流汗爬爬')" class="group flex justify-end items-end text-end mr-7">
            <span class="group-hover:bg-sky-50 group-hover:rounded group-hover:delay-1000">立刻探索</span>
            <span class="w-4 group-hover:hidden"> </span>
            <span class="material-icons text-sm group-hover:bg-sky-50 hidden group-hover:block group-hover:bg-sky-50 group-hover:rounded group-hover:delay-150">trending_flat</span>
          </a>
        </div>
      </li>
      <li class="flex flex-col sm:flex-row justify-center items-center">
        <div data-aos="fade-left" data-aos-duration="2000" class="w-full sm:w-1/2 block sm:hidden relative">
          <div @mouseenter="setHovering(3)" @mouseleave="setHovering(0)" class="card shadow-sm rounded-sm">
            <figure class="pr-5 pb-3">
              <img :src="isHovering[3] ? category3HoverImage : category3Image" alt="嘉明湖1" class="rounded-sm" />
            </figure>
          </div>
          <div class="absolute bottom-0 right-4 z-10">
            <p class="text-end mr-5 text-2xl text-black/70 bg-white/50 px-2 shadow-md">認真爬爬</p>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="2000" class="w-full sm:w-1/2 p-5">
          <p class="px-5 tracking-wide">認真爬爬，是真正的登山冒險。這需要更多的時間和耐力，可能需要三天兩夜或更長的時間。在這條路線上，你需要更多的計劃和籌備，同時也需要更多的登山經驗。然而，這個旅程也讓你有機會探索更遙遠的地方，並感受到大自然的震撼和寧靜。</p>
          <br />
          <a href="" @click.prevent="toCategory('認真爬爬')" class="group flex justify-end items-end text-end mr-7">
            <span class="group-hover:bg-sky-50 group-hover:rounded group-hover:delay-1000">立刻探索</span>
            <span class="w-4 group-hover:hidden"> </span>
            <span class="material-icons text-sm group-hover:bg-sky-50 hidden group-hover:block group-hover:bg-sky-50 group-hover:rounded group-hover:delay-150">trending_flat</span>
          </a>
        </div>
        <div data-aos="fade-left" data-aos-duration="2000" class="w-full sm:w-1/2 hidden sm:block relative">
          <div @mouseenter="setHovering(3)" @mouseleave="setHovering(0)" class="card shadow-sm rounded-sm">
            <figure class="pr-5 pb-3">
              <img :src="isHovering[3] ? category3HoverImage : category3Image" alt="嘉明湖1" class="rounded-sm" />
            </figure>
          </div>
          <div class="absolute bottom-0 right-4 z-10">
            <p class="text-end mr-5 text-2xl text-black/70 bg-white/50 px-2 shadow-md">認真爬爬</p>
          </div>
        </div>
      </li>
    </ul>
  </section>
  <!-- 熱門行程 -->
  <section class="container mb-10 relative">
    <img class="absolute top-0 -left-[25%]" src="@/assets/images/bg.png" alt="" />
    <div data-aos="fade-up" data-aos-duration="2000" class="flex container">
      <p class="text-2xl w-1/12 mr-1 z-10 dark:text-shadow">熱門<br />行程</p>
      <ul class="w-11/12 flex flex-col md:flex-row gap-4">
        <li class="card bg-base-100 dark:bg-dark_mode_2 border border-1 border-primary rounded-sm">
          <figure class="px-3 pt-3">
            <img src="@/assets/images/Mountain/眠月線01.jpg" alt="眠月線01" class="rounded-sm" />
          </figure>
          <div class="card-body ml-2 py-5">
            <p class="font-bold">名稱 <span class="font-normal">被遺忘的鐵道-眠月線</span></p>
            <p class="font-bold">時程 <span class="font-normal">兩天一夜</span></p>
            <div class="card-actions justify-center">
              <RouterLink :to="`/product/-NgvoaTTi0IZUBxrrb_5`" class="btn btn-outline btn-primary w-full rounded-sm">參考行程</RouterLink>
            </div>
          </div>
        </li>
        <li class="card bg-base-100 dark:bg-dark_mode_2 border border-1 border-primary rounded-sm">
          <figure class="px-3 pt-3">
            <img src="@/assets/images/Mountain/奇萊南峰06.jpg" alt="奇萊華峰08" class="rounded-sm" />
          </figure>
          <div class="card-body ml-2 py-5">
            <p class="font-bold">名稱 <span class="font-normal">奇萊華峰 - 黃金大草原</span></p>
            <p class="font-bold">時程 <span class="font-normal">兩天一夜</span></p>
            <div class="card-actions justify-center">
              <RouterLink :to="`/product/-NgvVQs2Zuv1rs8JtB0i`" class="btn btn-outline btn-primary w-full rounded-sm">參考行程</RouterLink>
            </div>
          </div>
        </li>
        <li class="card bg-base-100 dark:bg-dark_mode_2 border border-1 border-primary rounded-sm">
          <figure class="px-3 pt-3">
            <img src="@/assets/images/Mountain/大壩群峰02.png" alt="大壩群峰02" class="rounded-sm" />
          </figure>
          <div class="card-body ml-2 py-5">
            <p class="font-bold">名稱 <span class="font-normal">大霸群峰 - 巨人的酒桶</span></p>
            <p class="font-bold">時程 <span class="font-normal">三天三夜</span></p>
            <div class="card-actions justify-center">
              <RouterLink :to="`/product/-NgqXCmjYncHer4McAg4`" class="btn btn-outline btn-primary w-full rounded-sm">參考行程</RouterLink>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <!-- 上山警語 -->
  <section
    class="bg-cover bg-center bg-fixed h-44 mb-10"
    style="
      background-image: url('https://lh3.googleusercontent.com/fife/AKsag4OCdGjc7NERLgXo94psjeeRJAP3bNkeeWWCmzUVc05IQ-wFtpgfVIBqqTb6c7UIPwlmBHvGuMQBg9cmwA-ESu15hQxVFthCpd72NVHbug1C8REO2U26n6-iUuFkY4u40W3GGswTsd_SOGxIaAfcrSJxuR4-m5UQJY0qW7tktXc3CX0KFx5Z2HxORZQGYOif7QW1y6cc4r1_33lVgpZiEIOoj-__NXRYrhwfuOiJKoQfX4QBKDpy9roGmlC3HWM5BbH8SdTgHFFPqRyKFqJQ9iPrg2Ovf-vuR_DGfm560YgLGT0WP6nek6H2xWbHkvOIorYkZw9cKEq76HZAQzoEHuIEfGCMt7Q-ELEcm-zXnl5K-tEQhtp-icM8YbhOtMITOJiLD-CfAysLfDle4tS_LHDnjXbQMLD4np_OXYk0Gum9g_MkjkuAHKtRDpr8igs1Nkly0IyntK5WzUZE3IspzMDL7Hj1B4TzMRGYk0Sd_Y7ia7E9-Wce9CqX72NFtnTsr6nh5YcnBq-pkyGNaPHU0Skbjujg2WMvTbfJcBLJ66Mj6vVXjAdhXcL-uaZfrqzQAdvzRwKAiuv0sMvMb6_QU8GWgyOaIoE7IWkuxBdDl6nQb70X5Re69ZcFvrU4WwhV7T32Smvh17kWr1BZ_FeVdmhaL8zwKxsQiI8uLKW6VwmwnmbLeODJtjPX4JhqFR_vzerfoplCFsjYJYz6xNq0q1W8qzOB6yw5czcIq7ZLIFABMTR9KLpSA2i3RmQVwVWWVXzk5xQi5XUhjaTEI_f9iWAcPlPsCVdp3vAeG7X1d33EIXdhLEalcJSLRYloouR77-ZWNexL-LPBf4Wz6Alidjy79Ds01EO4mEpxI85tMjA3lE8qnSy4NAFnrSWPeSfsQvcCmnasd9qtKxz_PJHb7yDUpEaWOrdjidk2uKMk3hvMIrE9HGxqh6YuFRBSMaGpLtEvLErELQ=w2226-h1434');
    ">
    <ul class="list-none rounded text-center text-white p-10 bg-transparent text-shadow">
      <li class="text-3xl font-bold leading-tight"><span>帶什麼上山，</span> 帶什麼下山</li>
      <li class="text-base leading-tight">為了保護山林美好的環境，請落實無痕山林運動！ Leave No Trace(LNT)於 2006 年底在台灣正式命名「無痕山林運動」</li>
      <li class="hidden xs:block text-base leading-tight">帶什麼上山帶什麼下山，來去不留痕跡。</li>
    </ul>
  </section>
  <!-- 登山知識 -->
  <section class="mb-10">
    <p class="text-xl text-center mb-5">你還想知道什麼嗎？</p>
    <p class="text-center mb-5">透過以下分類讓你快速找到需要的登山知識</p>
    <ul class="list-none flex flex-wrap text-center p-10 font-bold">
      <li data-aos="fade-down-right" data-aos-duration="2000" class="w-full xs:w-1/2 sm:w-1/4 aspect-square flex items-center justify-center bg-primary hover:bg-cover hover:bg-no-repeat hover:bg-center hover:bg-[url('@/assets/images/blog/wear.jpg')] text-white mb-2 shadow-md">
        <RouterLink :to="`article/-NhZwaPlb8sZZ4E7BUTl`" class="">
          <figure class="flex flex-col items-center justify-center">
            <img class="" src="@/assets/images/icons/wearIcon-w.svg" alt="wearIcon-w" />
            <p class="">身著推薦</p>
          </figure>
        </RouterLink>
      </li>
      <li data-aos="fade-down-left" data-aos-duration="2000" class="w-full xs:w-1/2 sm:w-1/4 aspect-square flex items-center justify-center bg-white hover:bg-cover hover:bg-no-repeat hover:bg-center hover:bg-[url('@/assets/images/blog/food.webp')] text-black mt-2 shadow-md">
        <RouterLink :to="`article/-NhZy2SiMOgr7nWURZ9p`" class="">
          <figure class="flex flex-col items-center justify-center">
            <img class="" src="@/assets/images/icons/foodIcon-b.svg" alt="wearIcon-w" />
            <p class="">糧食推薦</p>
          </figure>
        </RouterLink>
      </li>
      <li data-aos="fade-up-right" data-aos-duration="2000" class="w-full xs:w-1/2 sm:w-1/4 aspect-square flex items-center justify-center bg-primary hover:bg-cover hover:bg-no-repeat hover:bg-center hover:bg-[url('@/assets/images/blog/smallThings.jpg')] text-white mb-2 shadow-md">
        <RouterLink :to="`article/-NhZx1qm7uBLB2CZFyHi`" class="">
          <figure class="flex flex-col items-center justify-center">
            <img class="" src="@/assets/images/icons/smallThingsIcon-w.svg" alt="smallThingsIcon-w" />
            <p class="">登山知識</p>
          </figure>
        </RouterLink>
      </li>
      <li data-aos="fade-up-left" data-aos-duration="2000" class="w-full xs:w-1/2 sm:w-1/4 aspect-square flex items-center justify-center bg-white hover:bg-cover hover:bg-no-repeat hover:bg-center hover:bg-[url('@/assets/images/blog/fitOut1.jpg')] text-black mt-2 shadow-md">
        <RouterLink :to="`article/-NhZyhg2tPIhjmTPRrOm`" class="">
          <figure class="flex flex-col items-center justify-center">
            <img class="" src="@/assets/images/icons/fitOutIcon-b.svg" alt="foodIcon-w" />
            <p class="">裝備推薦</p>
          </figure>
        </RouterLink>
      </li>
    </ul>
  </section>
  <!-- <section class="pb-5 bg-gradient-to-b from-[#F2F0EE] dark:from-dark_mode_1 to-white">
    <div class="flex justify-center items-center container">
      <figure class="w-2/5 pr-5 pb-3">
        <img class="shadow-xl rounded-sm opacity-80" src="@/assets/images/Mountain/眠月線02.jpg" alt="眠月線02" />
      </figure>
      <div class="">
        <p class="text-xl mb-5">你在找這個嗎？</p>
        <p class="mb-5">立刻訂閱，掌握最新資訊，節省你的花費，把歡樂帶回你的家！</p>
        <div class="form-control">
          <div class="input-group input-group-sm">
            <input type="text" placeholder="輸入您的信箱" class="input input-bordered input-sm" />
            <button class="btn btn-square btn-primary btn-sm w-10">訂閱</button>
          </div>
        </div>
      </div>
    </div>
  </section> -->
</template>

<style lang="scss" scoped>
.text-gradient {
  background-image: linear-gradient(to bottom, #ffffff, transparent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
