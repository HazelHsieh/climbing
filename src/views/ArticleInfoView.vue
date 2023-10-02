<script setup>
import pageImage from "@/assets/images/pageImage/ArticleView.jpg";
import PageHeader from "@/components/PageHeader.vue";
</script>
<template>
  <PageHeader :image-url="pageImage" />
  <div class="container dark:bg-dark_mode_1">
    <div class="flex flex-col">
      <div class="dark:bg-dark_mode_2 bg-white mb-5 rounded-sm">
        <ul class="flex items-center overflow-x-auto cursor-pointer transition-all">
          <li class="w-full">
            <div class="p-3 hover:bg-primary hover:text-white">
              <p class="text-center whitespace-nowrap">全部文章</p>
            </div>
          </li>
          <li class="w-full">
            <div class="p-3 hover:bg-primary hover:text-white">
              <p class="text-center whitespace-nowrap">衣著推薦</p>
            </div>
          </li>
          <li class="w-full">
            <div class="p-3 hover:bg-primary hover:text-white">
              <p class="text-center whitespace-nowrap">登山知識</p>
            </div>
          </li>
          <li class="w-full">
            <div class="p-3 hover:bg-primary hover:text-white">
              <p class="text-center whitespace-nowrap">糧食選擇</p>
            </div>
          </li>
          <li class="w-full">
            <div class="p-3 hover:bg-primary hover:text-white">
              <p class="text-center whitespace-nowrap">裝備推薦</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="flex flex-col">
        <div class="bg-white dark:bg-dark_mode_2 z-10 flex flex-col flex-1 w-full lg:max-w-[900px] lg:mx-auto p-4 lg:py-6 lg:px-8">
          <div class="[&:not(:last-child)]:mb-5">
            <h3 class="flex items-start [&:not(:last-child)]:mb-2">
              <p class="font-bold text-xl lg:text-2xl">夏天登山穿搭指南：視海拔和山上氣溫而定</p>
            </h3>
          </div>
          <div class="flex flex-col space-y-4">
            <div class="flex items-start">
              <img class="flex-shrink-0 w-8 h-8 [&:not(:last-child)]:mt-2 [&:not(:last-child)]:mr-4 object-cover rounded-full" src="https://images.pexels.com/photos/9833110/pexels-photo-9833110.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="articleContent.author" />
              <div class="flex flex-col">
                <p class="font-bold">老航人</p>
                <p class="font-normal">2023/03/12</p>
              </div>
            </div>
            <div class="flex items-center flex-wrap gap-x-4 gap-y-3">
              <div v-for="tag in 1" :key="tag">
                <p class="font-bold whitespace-nowrap"># 衣著推薦</p>
              </div>
            </div>
          </div>
          <div class="pt-9 pb-10 mb-20 border-b-2">
            <div class="editor-content">在台灣的高山地區，夏天的氣溫通常並不像平地那樣炎熱，事實上，海拔在2500公尺以上的山區，平均氣溫只有約10°C，而海拔在3500公尺以上的山區，更只有約5°C。如果你計劃攀爬海拔較高的高山，即使在平地感到酷熱，夏天的登山穿搭仍需以山上的氣溫為主，並備妥保暖裝備以應對可能的低溫。你可以考慮選用3層式穿搭方式，以因應山上氣溫的變化，確保舒適和安全。</div>
          </div>
          <!-- <div
            class="flex flex-col lg:flex-row justify-between mt-auto space-y-10 lg:space-y-0"
          >
            <template v-for="(item, index) in filterOtherItem" :key="item.id">
              <router-link
                :to="`/article/${item.id}`"
                v-if="index % 2 === 0"
                class="flex flex-row-reverse items-center w-full lg:max-w-none lg:w-[40%] py-3 px-5 lg:py-4 lg:px-8 border-2 lg:border-t-0 lg:border-l-0 lg:border-r-0 lg:border-b-4 border-netural-netural-400 group transition-all ease-in-out duration-500 hover:bg-netural-netural-400 cursor-pointer"
              >
                <p
                  class="flex-1 pl-3 ch-heading-3 font-bold text-netural-netural-400 transition-all ease-in-out duration-500 group-hover:text-netural-netural-100 line-clamp-2"
                >
                  {{ item.title }}
                </p>
                <div
                  class="flex-shrink-0 w-4 h-4 lg:w-8 lg:h-8 mr-auto opacity-100 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:bg-netural-netural-100 bg-netural-netural-400 rotate-180 icon-arrow"
                ></div>
              </router-link>
              <router-link
                :to="`/article/${item.id}`"
                class="flex items-center w-full lg:max-w-none lg:w-[40%] py-3 px-5 lg:py-4 lg:px-8 border-2 lg:border-t-0 lg:border-l-0 lg:border-r-0 lg:border-b-4 border-netural-netural-400 group transition-all ease-in-out duration-500 hover:bg-netural-netural-400 text-right cursor-pointer"
              >
                <p
                  class="flex-1 pr-3 ch-heading-3 font-bold text-netural-netural-400 transition-all ease-in-out duration-500 group-hover:text-netural-netural-100 line-clamp-2"
                >
                  文章的抬頭
                </p>
                <div
                  class="flex-shrink-0 w-4 h-4 lg:w-8 lg:h-8 ml-auto opacity-100 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:bg-netural-netural-100 bg-netural-netural-400 icon-arrow"
                ></div>
              </router-link>
            </template>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
