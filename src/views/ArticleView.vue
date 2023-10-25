<script setup>
import pageImage from "@/assets/images/pageImage/ArticleView.jpg";
import PageHeader from "@/components/PageHeader.vue";
import ArticleItem from "@/components/ArticleItem.vue";
import { useArticlesStore } from "@/stores/articlesStore.js";
import { storeToRefs } from "pinia";

const ArticlesStore = useArticlesStore(); // 把方法變成變數
const { articles } = storeToRefs(ArticlesStore); // 在解構出来就不用在前缀加上 store
</script>

<template>
  <PageHeader :image-url="pageImage" />
  <div class="container">
    <div class="flex flex-col">
      <div class="dark:bg-dark_mode_2 bg-white mb-5">
        <!-- <ul class="flex items-center overflow-x-auto cursor-pointer transition-all">
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
        </ul> -->
      </div>
      <div class="">
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-6">
          <template v-for="article in articles" :key="article.id">
            <ArticleItem :article="article" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
