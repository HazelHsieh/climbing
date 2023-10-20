<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const props = defineProps({
  imageUrl: {
    type: String,
    default: "https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=1920&h=400&dpr=2",
  },
});
</script>

<template>
  <div class="flex flex-col">
    <div class="overflow-hidden relative">
      <img :src="imageUrl" class="w-full h-[200px] lg:h-[400px] object-cover" :alt="route.meta.title" />
    </div>
    <div class="container">
      <div class="relative z-10 flex items-center justify-center mx-auto w-full max-w-[400px] -translate-y-1/2 bg-base-100 dark:bg-dark_mode_1">
        <p class="relative px-6 py-2 after:content-[''] after:relative after:-bottom-2 after:block after:h-1 after:bg-text_color dark:after:bg-white text-center text-2xl lg:text-4xl font-bold">
          {{ route.meta.title }}
        </p>
      </div>
    </div>
  </div>
</template>
