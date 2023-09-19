<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// 状态变量来控制是否显示返回顶部按钮
const showScrollToTopButton = ref(false);

// 滚动到页面顶部的函数
const scrollToTop = () => {
  
  window.scrollTo({
    top: 0,
    behavior: "smooth" // 平滑滚动效果
  });
};

// 滚动事件监听器函数
const handleScroll = () => {
  console.log(111)
  // 显示或隐藏按钮
  if (window.scrollY > 100) {
    console.log(window.scrollY > 100);
    showScrollToTopButton.value = true;
  } else {
    console.log(window.scrollY > 100);
    showScrollToTopButton.value = false;
  }
};
// 添加滚动事件监听器
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// 在组件销毁时移除滚动事件监听器
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="container">
    <p>PrepareView</p>
    <p>行前準備</p>

    <section>
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br>
    </section>
    <!-- <ScrollToTopButton /> -->

    <!-- <button  @click="scrollToTop" v-show="showScrollToTopButton" class="flex flex-col gap-2 h-16 btn btn-xs fixed bottom-4 right-4">
      <span class="material-symbols-outlined">
        north
      </span>
      <span class="rotate-90">
        Top
      </span>
    </button> -->
    
    <button @click="scrollToTop" class="btn fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg" v-if="showScrollToTopButton">
      返回顶部
    </button>
  </div>
</template>
