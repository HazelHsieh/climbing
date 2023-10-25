<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import pageImage from "@/assets/images/pageImage/ArticleView.jpg";
import PageHeader from "@/components/PageHeader.vue";
import { ddmmyyyy } from "@/utils/filter.js";
import api from "../apis/https";
import Loading from "vue-loading-overlay";
const route = useRoute();
// 從路由路徑中分割('/')字符串取得第三部分
const articleId = route.path.split("/")[2];

const articleInfo = ref([]);
const isLoading = ref(false); // 初始值
// 文字 format
const formatText = (text) => text.replace(/\n/g, "<br >");
const getArticleInfo = async (id) => {
  try {
    isLoading.value = true;
    const res = await api.getArticle(id);
    articleInfo.value = res.data.article;
    articleInfo.value.content = formatText(res.data.article.content);
    isLoading.value = false;
  } catch (error) {
    console.log(error.message);
  }
};
// 當頁面即將載入時觸發
onBeforeMount(() => {
  getArticleInfo(articleId);
});
</script>
<template>
  <PageHeader :image-url="pageImage" />
  <loading :active="isLoading" color="#D5B690" background-color="black" />
  <div class="container dark:bg-dark_mode_1">
    <div class="flex flex-col">
      <!-- <div class="dark:bg-dark_mode_2 bg-white mb-5 rounded-sm">
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
      </div> -->
      <div class="flex flex-col">
        <div class="bg-white dark:bg-dark_mode_2 z-10 flex flex-col flex-1 w-full lg:max-w-[900px] lg:mx-auto p-4 lg:py-6 lg:px-8">
          <div class="[&:not(:last-child)]:mb-5">
            <h3 class="flex items-start [&:not(:last-child)]:mb-2">
              <p class="font-bold text-xl lg:text-2xl">{{ articleInfo.title }}</p>
            </h3>
          </div>
          <div class="flex flex-col space-y-4">
            <div class="flex items-start">
              <img class="flex-shrink-0 w-8 h-8 [&:not(:last-child)]:mt-2 [&:not(:last-child)]:mr-4 object-cover rounded-full" src="https://images.pexels.com/photos/9833110/pexels-photo-9833110.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="articleContent.author" />
              <div class="flex flex-col">
                <p class="font-bold">{{ articleInfo.author }}</p>
                <p class="font-normal">{{ ddmmyyyy(articleInfo.create_at) }}</p>
              </div>
            </div>
            <div class="flex items-center flex-wrap gap-x-4 gap-y-3">
              <div v-for="tag in articleInfo.tag" :key="tag">
                <p class="font-bold whitespace-nowrap text-text_color/50"># {{ tag }}</p>
              </div>
            </div>
          </div>
          <div class="pt-5">
            <div v-html="articleInfo.description" class="tracking-wide"></div>
          </div>
          <div class="pt-5 pb-5 mb-5 border-b-2">
            <div v-html="articleInfo.content" class="tracking-wide"></div>
          </div>
          <router-link to="/article" class="flex justify-center items-center text-primary border-primary border-2 w-[120px] h-10 md:w-40 md:h-[60px] group [transform:translateZ(0)] px-6 py-3 overflow-hidden bg-white relative before:absolute before:bg-primary before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-700">
            <span class="relative z-0 text-primary group-hover:text-white transition ease-in-out duration-700"> 返回文章列表 </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
