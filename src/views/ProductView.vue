<script setup>
import ProductItem from "@/components/ProductItem.vue";
import PageHeader from "@/components/PageHeader.vue";
import pageImage from "@/assets/images/pageImage/productView.jpg";
import { useProductsStore } from "@/stores/productsStore.js";
import { storeToRefs } from "pinia";
const ProductsStore = useProductsStore(); // 把方法變成變數
const { products } = storeToRefs(ProductsStore); // 在解構出来就不用在前缀加上 store
// import { ref } from "vue";
// // Loading
// import Loading from "vue-loading-overlay";
// const isLoading = ref(true); // 初始值
// setTimeout(() =>{
//   isLoading.value = false;
// }, 1000);
</script>
<template>
  <PageHeader :image-url="pageImage" />
  <!-- <loading :active="isLoading" color="white" background-color="black" /> -->
  <div class="container">
    <div class="flex flex-col lg:flex-row justify-between lg:space-x-8 mt-5">
      <!-- 側邊篩選 -->
      <div class="dark:bg-dark_mode_2 flex flex-col bg-white self-start w-full lg:w-1/5 mb-5 p-5 border rounded-md">
        <div class="form-control">
          <div class="input-group input-group-sm">
            <input type="text" placeholder="輸入關鍵字…" class="input input-bordered input-sm w-full" />
            <button class="btn btn-square btn-sm btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </div>
        <div class="flex flex-col">
          <p class="text-xl font-bold py-4">難度選擇</p>
          <ul class="overflow-x-auto lg:overflow-visible flex flex-row items-center lg:flex-col w-full">
            <!-- <li
              @click="changeCategory('全部地區')"
              class="group lg:w-full"
              :class="{ active: currentCategory === '全部地區' }"
            >
              <div
                class="flex items-center h-[48px] lg:h-auto after:content-['chevron\_right'] after:hidden lg:after:block group-[.active]:after:block after:ml-auto after:font-['Material_Symbols_Outlined'] p-3 lg:border-b lg:border-gray-200 cursor-pointer transition-all group-hover:bg-primary"
              >
                <p class="flex-1 pr-2 whitespace-nowrap">全部地區</p>
              </div>
            </li> -->
            <li class="group lg:w-full">
              <div class="flex items-center h-12 lg:h-auto after:content-['chevron\_right'] after:hidden lg:after:block group-[.active]:after:block after:ml-auto after:font-['Material_Symbols_Outlined'] p-3 lg:border-b lg:border-gray-200 cursor-pointer transition-all group-hover:bg-primary">
                <p class="flex-1 pr-2 whitespace-nowrap">全部行程</p>
              </div>
            </li>
            <!-- <li v-for="item in categoryData"
              :key="item"
              class="group lg:w-full"
              :class="{ active: currentCategory === item }"
              @click="changeCategory(item)">
              <div class="flex items-center h-[48px] lg:h-auto after:content-['chevron\_right'] after:hidden lg:after:block group-[.active]:after:block after:ml-auto after:ch-heading-3 after:font-['Material_Symbols_Outlined'] p-3 lg:border-b lg:border-gray-200 cursor-pointer transition-all group-[.active]:bg-netural-netural-400 group-[.active]:text-netural-netural-100">
                <p class="flex-1 pr-2 whitespace-nowrap">{{ item }}</p>
              </div>
            </li> -->
            <li class="group lg:w-full">
              <div class="flex items-center h-12 lg:h-auto after:content-['chevron\_right'] after:hidden lg:after:block group-[.active]:after:block after:ml-auto after:font-['Material_Symbols_Outlined'] p-3 lg:border-b lg:border-gray-200 cursor-pointer transition-all group-hover:bg-primary">
                <p class="flex-1 pr-2 whitespace-nowrap">輕鬆爬爬</p>
              </div>
            </li>
            <li class="group lg:w-full">
              <div class="flex items-center h-12 lg:h-auto after:content-['chevron\_right'] after:hidden lg:after:block group-[.active]:after:block after:ml-auto after:font-['Material_Symbols_Outlined'] p-3 lg:border-b lg:border-gray-200 cursor-pointer transition-all group-hover:bg-primary">
                <p class="flex-1 pr-2 whitespace-nowrap">流汗爬爬</p>
              </div>
            </li>
            <li class="group lg:w-full">
              <div class="flex items-center h-12 lg:h-auto after:content-['chevron\_right'] after:hidden lg:after:block group-[.active]:after:block after:ml-auto after:font-['Material_Symbols_Outlined'] p-3 lg:border-b lg:border-gray-200 cursor-pointer transition-all group-hover:bg-primary">
                <p class="flex-1 pr-2 whitespace-nowrap">認真爬爬</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 行程列表 -->
      <div class="lg:flex-auto w-full">
        <!-- <div v-show="!isLoading" class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-6"> -->
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-6">
          <template v-for="product in products.products" :key="product.id">
            <ProductItem :product="product" />
          </template>
        </div>
        <!-- <div class="flex flex-col justify-center space-y-4 max-w-[800px] mx-auto">
          <p class="text-center">找不到符合的關鍵字，請重新搜尋</p>
        </div> -->
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped></style>
