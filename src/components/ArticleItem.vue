<script setup>
const props = defineProps({
  articleData: {
    type: Object,
    default: () => {},
  },
  imageClass: {
    type: String,
  },
  textContentClass: {
    type: String,
  },
});
</script>
<template>
  <router-link :to="`/articleInfo`" class="flex flex-col mb-10 lg:mb-20 group">
    <div class="flex w-full">
      <img src="https://picsum.photos/1920/400" class="w-full h-[180px] lg:h-[280px] object-cover" alt="articleData.title" />
    </div>
    <div class="relative z-10 flex flex-col flex-1 -mt-[8%] ml-[13%] p-4 lg:py-6 lg:px-8 bg-base-100 group-hover:bg-primary transition-all">
      <div class="[&:not(:last-child)]:mb-5">
        <h3 class="flex items-start [&:not(:last-child)]:mb-2">
          <p class="font-bold text-base lg:text-xl text-text_color line-clamp-2 group-hover:text-white transition-all">夏天登山穿搭指南：視海拔和山上氣溫而定</p>
        </h3>
        <div>
          <p class="font-normal text-sm lg:text-base text-text_color line-clamp-3 group-hover:text-white transition-all">在台灣的高山地區，夏天的氣溫通常並不像平地那樣炎熱，事實上，海拔在2500公尺以上的山區，平均氣溫只有約10°C，而海拔在3500公尺以上的山區，更只有約5°C。如果你計劃攀爬海拔較高的高山，即使在平地感到酷熱，夏天的登山穿搭仍需以山上的氣溫為主，並備妥保暖裝備以應對可能的低溫。你可以考慮選用3層式穿搭方式，以因應山上氣溫的變化，確保舒適和安全。</p>
        </div>
      </div>
      <div class="flex items-start mt-auto">
        <img class="flex-shrink-0 w-8 h-8 [&:not(:last-child)]:mt-2 [&:not(:last-child)]:mr-4 object-cover rounded-full" src="https://i.pravatar.cc/200?u=" alt="articleData.author" />
        <div class="flex flex-col">
          <p class="ch-caption-2 lg:ch-caption-1 font-bold text-text_color group-hover:text-white transition-all">articleData.author</p>
          <p class="ch-caption-2 lg:ch-caption-1 font-normal text-text_color group-hover:text-white transition-all">12, Mar 2023</p>
        </div>
      </div>
    </div>
  </router-link>
</template>
