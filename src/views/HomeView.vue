<script setup>
// import { ref, onMounted } from "vue";
// import Loading from "vue-loading-overlay";
// import { NTabs, NTabPane } from "naive-ui";

// const isLoading = ref(true);
// onMounted(() => {
//   setTimeout(() => {
//     isLoading.value = false;
//   }, 1000);
// });
</script>

<template>
  <main>
    <!-- <loading :active="isLoading" loader="bars" :height="150" :width="150" color="#00FFFF" background-color="black" /> -->
    <!-- tabs -->
    <!-- <div class="relative">
      <n-tabs type="line" animated class="mb-10">
        <n-tab-pane name="tab1" tab="tab1" display-directive="show"> </n-tab-pane>
        <n-tab-pane name="tab2" tab="tab2"> </n-tab-pane>
      </n-tabs>
    </div> -->
  </main>
  <section class="">
    <!-- <figure>
      <img class="w-full object-cover h-[400px]" src="@/assets/images/banner.png" alt="banner">
    </figure> -->

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

  <section class="container bg-white dark:bg-dark_mode_2 p-5 mb-10">
    <p class="text-xl text-center pb-5">探索不同體驗</p>
    <ul class="flex flex-wrap gap-10">
      <li class="flex flex-col sm:flex-row justify-center items-center">
        <div class="w-full sm:w-1/2 block sm:hidden relative">
          <!-- 1. -->
          <!-- <figure class="p-1 border-2 border-black-400 rounded-md">
            <img class="rounded-md" src="@/assets/images/Mountain/郡大山01.jpg" alt="郡大山01">
          </figure> -->
          <!-- 2. -->
          <div class="card shadow-xl rounded-sm">
            <figure class="pr-5 pb-3">
              <img src="@/assets/images/Mountain/郡大山01.jpg" alt="Shoes" class="rounded-sm" />
            </figure>
            <!-- <div class="">
              <h2 class="text-end text-2xl mr-5">輕鬆爬爬</h2>
            </div> -->
          </div>
          <div class="absolute bottom-0 right-4 z-10">
            <p class="text-end mr-5 text-2xl text-black/70 bg-white/50 px-2 shadow-md">輕鬆爬爬</p>
          </div>
        </div>
        <div class="w-full sm:w-1/2 p-5">
          <p class="px-1">登山是一項令人興奮的戶外運動，可以帶給你更多的收穫。特別是你在初次登山可以在山頂迎接生命中最令人難以置信的景色和感受，面對挑戰，經歷變化，從而醞釀著人生中最難忘的回憶。踏上登山旅程，攀上山頂，一輩子的回憶正在等待你！</p>
          <br />
          <!-- <div class="flex items-end">
          </div> -->
          <a href="" class="group flex justify-end items-end text-end mr-7">
            <span class="group-hover:bg-sky-50 group-hover:rounded group-hover:delay-1000">立刻探索</span>
            <span class="w-4 group-hover:hidden"> </span>
            <span class="material-icons text-sm group-hover:bg-sky-50 hidden group-hover:block group-hover:bg-sky-50 group-hover:rounded group-hover:delay-150">trending_flat</span>
          </a>
        </div>
        <div class="w-full sm:w-1/2 hidden sm:block relative">
          <!-- 1. -->
          <!-- <figure class="p-1 border-2 border-black-400 rounded-md">
            <img class="rounded-md" src="@/assets/images/Mountain/郡大山01.jpg" alt="郡大山01">
          </figure> -->
          <!-- 2. -->
          <div class="card shadow-xl rounded-sm">
            <figure class="pr-5 pb-3">
              <img src="@/assets/images/Mountain/郡大山01.jpg" alt="Shoes" class="rounded-sm" />
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
        <div class="w-full sm:w-1/2 relative">
          <div class="card rounded-sm">
            <figure class="pr-5 pb-3">
              <img src="@/assets/images/Mountain/奇萊南峰01.png" alt="奇萊南峰01" class="rounded-sm" />
            </figure>
          </div>
          <div class="absolute bottom-0 right-4 z-10">
            <p class="text-end mr-5 text-2xl text-black/70 bg-white/50 px-2 shadow-md">流汗爬爬</p>
          </div>
        </div>
        <div class="w-full sm:w-1/2 p-5">
          <p class="px-5">踏上登山之旅，每一步前行都將會是一場冒險，你還會領悟到攻克高峰的磨練，和對自然萬物的尊重；集結寶貴的能量，將使你在追求夢想的道路上更加踏實，承受挑戰，也開啟一段精彩的壯麗旅程！</p>
          <br />
          <a href="" class="group flex justify-end items-end text-end mr-7">
            <span class="group-hover:bg-sky-50 group-hover:rounded group-hover:delay-1000">立刻探索</span>
            <span class="w-4 group-hover:hidden"> </span>
            <span class="material-icons text-sm group-hover:bg-sky-50 hidden group-hover:block group-hover:bg-sky-50 group-hover:rounded group-hover:delay-150">trending_flat</span>
          </a>
        </div>
      </li>
      <li class="flex flex-col sm:flex-row justify-center items-center">
        <div class="w-full sm:w-1/2 block sm:hidden relative">
          <div class="card shadow-sm">
            <figure class="pr-5 pb-3">
              <img src="@/assets/images/Mountain/嘉明湖11.png" alt="奇萊南峰01" class="rounded-sm" />
            </figure>
          </div>
          <div class="absolute bottom-0 right-4 z-10">
            <p class="text-end mr-5 text-2xl text-black/70 bg-white/50 px-2 shadow-md">認真爬爬</p>
          </div>
        </div>
        <div class="w-full sm:w-1/2 p-5">
          <p class="px-5">勇敢挑戰極限，極致的攀登將為你帶來極致的感受；追求自由的極限將在你眼前展開；在征服極限的興奮中，還會帶來一種深沉的內在收穫，令你更加深刻的看待和欣賞自然的美；攀登高山，找到內心自由，從內而外，探索人生！</p>
          <br />
          <a href="" class="group flex justify-end items-end text-end mr-7">
            <span class="group-hover:bg-sky-50 group-hover:rounded group-hover:delay-1000">立刻探索</span>
            <span class="w-4 group-hover:hidden"> </span>
            <span class="material-icons text-sm group-hover:bg-sky-50 hidden group-hover:block group-hover:bg-sky-50 group-hover:rounded group-hover:delay-150">trending_flat</span>
          </a>
        </div>
        <div class="w-full sm:w-1/2 hidden sm:block relative">
          <div class="card shadow-sm">
            <figure class="pr-5 pb-3">
              <img src="@/assets/images/Mountain/嘉明湖11.png" alt="奇萊南峰01" class="rounded-sm" />
            </figure>
          </div>
          <div class="absolute bottom-0 right-4 z-10">
            <p class="text-end mr-5 text-2xl text-black/70 bg-white/50 px-2 shadow-md">認真爬爬</p>
          </div>
        </div>
      </li>
    </ul>
  </section>
  <!-- <section class="bg-cover bg-center bg-[url('@/assets/images/bg.png')]"> -->
  <section class="container mb-10 relative">
    <img class="absolute top-0 -left-[25%]" src="@/assets/images/bg.png" alt="" />
    <div class="flex container">
      <p class="text-2xl w-1/12 mr-1 z-10 dark:text-shadow">熱門<br />行程</p>
      <ui class="w-11/12 flex flex-col md:flex-row gap-4">
        <li class="card bg-base-100 dark:bg-dark_mode_2 border border-1 border-primary rounded-sm">
          <figure class="px-3 pt-3">
            <img src="@/assets/images/Mountain/眠月線01.jpg" alt="眠月線01" class="rounded-sm" />
          </figure>
          <div class="card-body ml-2 py-5">
            <p class="font-bold">名稱 <span class="font-normal">被遺忘的鐵道-眠月線</span></p>
            <p class="font-bold">時程 <span class="font-normal">兩天一夜</span></p>
            <div class="card-actions justify-center">
              <button class="btn btn-outline btn-primary w-full rounded-sm">參考行程</button>
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
              <button class="btn btn-outline btn-primary w-full rounded-sm">參考行程</button>
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
              <button class="btn btn-outline btn-primary w-full rounded-sm">參考行程</button>
            </div>
          </div>
        </li>
      </ui>
    </div>
  </section>
  <!-- <section class="bg-cover bg-center bg-fixed h-48 relative" style="background-image: url('https://lh3.googleusercontent.com/fife/AKsag4P0mmLLN3_FrjE2uCkNeqr9ZotV8t3cvSgn_AcAcAcEO4fS6E_rKfa2c9e8cXfeUqY1q0TD9rgwG_DrZlMrCla5CrvNP9p8qzShYsdICKJCVFlaTCQNgWj-Jq1-l9sIhsGd-MzqUhk5BXkPvqLtXGWcVbeeRDDrK-SZ7wB3M9w-CHuUwgW0GkRxxPvJ_-7Ok-Ep58SSrHQDpxUWhQPGmW6VeTiT0qD780rLPTtieKUcEyPZd4Y3OypozD5igAs75Lw7WcXoGiNDwoEFq7ps5d6dr9vRt1Cwh4Gwj3zJVUD_SwmqE1kV4NLZwHomA2v20yjRQ6pDo_jXwr2LvCyDR13puR5XJZDAK7REM24uJaQZnkYqYnOMexahNsBco7lIclFwticUmvMXhrEVm8yGT05WcRxTv8fML69pd2Ramo-GoM6c8U87bhyLmHHW2wVR_t4EhJDdjlKRAZF_4-WmnJ6oxosoPTyRHT6ZHu_g3PgU2LYfFPJLPZX0qvGs1Xhv1-EeT7Sp6sofWpTk2F2CJYK0XLjDRFH3F_FLVi3BU9WRQ4U0fvuEKlWSOtlwRGl1bk6gCkuM8ZZsMLKCSlAo95i2D_akCdajUNtHghDlHuyaVMvaFSvjVFUJrkDxNMyRfpT-5_bU1wll8dieYV7jZfdglhmMLkLCeALcni4iVwq8pBO-2ZJDd1vukT5lrklzgIUS-2qb1NJtTXR3-1a9jDiEt5_IaDXsCUPQEUCLGQdtuvPok3dpCGelefAxSvGz_FRW8cpQ_d6uTmxosKAgEnjUT3iSjPB_lAOagSo57J5b4_gocjXo3gTvDE-hcv8VtqH0CJqFotZ8U05WP8f3xNSnjR3LconcD_0c2ssmFayktHivzYBVhU3xoROcBbn76iP4Asb4a05A7IvZ7e-NW75mx1xFYG-S2BxoY0RojmiKi2C227ucaG2OKNhDvstV9nVaZd3Pjg=w2556-h1434');"> -->
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
  <section class="mb-10">
    <p class="text-xl text-center mb-5">你還想知道什麼嗎？</p>
    <p class="text-center mb-5">透過以下分類讓你快速找到需要的登山知識</p>
    <ul class="list-none flex flex-wrap text-center p-10 font-bold">
      <li class="w-full xs:w-1/2 sm:w-1/4 aspect-square flex items-center justify-center bg-primary hover:bg-cover hover:bg-no-repeat hover:bg-center hover:bg-[url('@/assets/images/blog/wear.jpg')] text-white mb-2 shadow-md">
        <figure class="flex flex-col items-center justify-center">
          <img class="" src="@/assets/images/icons/wearIcon-w.svg" alt="wearIcon-w" />
          <p class="">身著推薦</p>
        </figure>
      </li>
      <li class="w-full xs:w-1/2 sm:w-1/4 aspect-square flex items-center justify-center bg-white hover:bg-cover hover:bg-no-repeat hover:bg-center hover:bg-[url('@/assets/images/blog/food.webp')] text-black mt-2 shadow-md">
        <figure class="flex flex-col items-center justify-center">
          <img class="" src="@/assets/images/icons/foodIcon-b.svg" alt="wearIcon-w" />
          <p class="">糧食推薦</p>
        </figure>
      </li>
      <li class="w-full xs:w-1/2 sm:w-1/4 aspect-square flex items-center justify-center bg-primary hover:bg-cover hover:bg-no-repeat hover:bg-center hover:bg-[url('@/assets/images/blog/smallThings.jpg')] text-white mb-2 shadow-md">
        <figure class="flex flex-col items-center justify-center">
          <img class="" src="@/assets/images/icons/smallThingsIcon-w.svg" alt="smallThingsIcon-w" />
          <p class="">行動小物</p>
        </figure>
      </li>
      <li class="w-full xs:w-1/2 sm:w-1/4 aspect-square flex items-center justify-center bg-white hover:bg-cover hover:bg-no-repeat hover:bg-center hover:bg-[url('@/assets/images/blog/fitOut1.jpg')] text-black mt-2 shadow-md">
        <figure class="flex flex-col items-center justify-center">
          <img class="" src="@/assets/images/icons/fitOutIcon-b.svg" alt="foodIcon-w" />
          <p class="">裝備推薦</p>
        </figure>
      </li>
    </ul>
  </section>
  <section class="pb-5 bg-gradient-to-b from-[#F2F0EE] dark:from-dark_mode_1 to-white">
    <div class="flex justify-center items-center container">
      <!-- <figure class="pr-5 pb-3"> -->
      <figure class="w-2/5 pr-5 pb-3">
        <img class="shadow-xl rounded-sm opacity-80" src="@/assets/images/Mountain/眠月線02.jpg" alt="眠月線02" />
      </figure>
      <div class="">
        <p class="text-xl mb-5">你在找這個嗎？</p>
        <p class="mb-5">立刻訂閱，掌握最新資訊，節省你的花費，把歡樂帶回你的家！</p>
        <div class="form-control">
          <div class="input-group input-group-sm">
            <input type="text" placeholder="輸入您的信箱" class="input input-bordered input-sm" />
            <button class="btn btn-square btn-sm w-10">訂閱</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.text-gradient {
  background-image: linear-gradient(to bottom, #ffffff, transparent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
