<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isShowed = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const handleScroll = () => {
  const scrollY = window.scrollY;
  if (scrollY > 1000) {
    isShowed.value = true;
  } else {
    isShowed.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, true);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll, true);
});

</script>
<template>
  <div class="fixed end-0 bottom-0 scroll-top-btn pe-3 pb-4" v-if="isShowed">
    <button type="button" class="btn btn-secondary btn-xs h-12 px-1 flex flex-col items-center justify-center"  @click="scrollToTop">
      <span class="material-symbols-outlined text-center">north</span>
      <span>Top</span>
    </button>
  </div>
</template>
