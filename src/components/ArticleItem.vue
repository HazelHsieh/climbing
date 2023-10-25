<script setup>
import { ddmmyyyy } from "@/utils/filter.js";
// const props = defineProps({
//   articleData: {
//     type: Object,
//     default: () => {},
//   },
//   imageClass: {
//     type: String,
//   },
//   textContentClass: {
//     type: String,
//   },
// });
const props = defineProps(["article"]);
</script>
<template>
  <router-link :to="`/article/${props.article.id}`" class="flex flex-col mb-10 lg:mb-20 group">
    <div class="flex w-full">
      <img :src="props.article.imageUrl" class="w-full h-[180px] lg:h-[280px] object-cover" :alt="props.article.title" />
    </div>
    <div class="relative z-10 flex flex-col flex-1 -mt-[8%] ml-[13%] p-4 lg:py-6 lg:px-8 bg-base-100 group-hover:bg-primary transition-all">
      <div class="[&:not(:last-child)]:mb-5">
        <h3 class="flex items-start [&:not(:last-child)]:mb-2">
          <p class="font-bold text-base lg:text-xl text-text_color line-clamp-2 group-hover:text-white transition-all">{{ props.article.title }}</p>
        </h3>
        <div>
          <p class="font-normal text-sm lg:text-base text-text_color line-clamp-3 group-hover:text-white transition-all">{{ props.article.description }}</p>
        </div>
      </div>
      <div class="flex items-start mt-auto">
        <img class="flex-shrink-0 w-8 h-8 [&:not(:last-child)]:mt-2 [&:not(:last-child)]:mr-4 object-cover rounded-full" src="https://i.pravatar.cc/200?u=" alt="articleData.author" />
        <div class="flex flex-col">
          <p class="ch-caption-2 lg:ch-caption-1 font-bold text-text_color group-hover:text-white transition-all">{{ props.article.author }}</p>
          <p class="ch-caption-2 lg:ch-caption-1 font-normal text-text_color group-hover:text-white transition-all">{{ ddmmyyyy(props.article.create_at) }}</p>
        </div>
      </div>
    </div>
  </router-link>
</template>
