<script setup>
import ProductItem from "@/components/ProductItem.vue";
import PageHeader from "@/components/PageHeader.vue";
import pageImage from "@/assets/images/pageImage/productView.jpg";
import { useProductsStore } from "@/stores/productsStore.js";
import { storeToRefs } from "pinia";
import { ref, computed } from "vue";
// Loading
import Loading from "vue-loading-overlay";
import { useRoute } from "vue-router";

const route = useRoute();
const ProductsStore = useProductsStore(); // 把方法變成變數
const { products, menu } = storeToRefs(ProductsStore); // 在解構出来就不用在前缀加上 store
const isLoading = ref(true); // 初始值

// sidebar 資料處理
const searchText = ref("");
// const bread = computed(() => route.query?.category ? route.query.category : '');
const productMenu = ref([]);
productMenu.value.push(...menu.value);

const selectedCategory = ref(route.query?.category || "");

// 每個 tab 是否有 active 樣式
const isCategoryActive = (category) => {
  return category === selectedCategory.value;
};
// 更新 selectedCategory
const handleTabClick = (category) => {
  selectedCategory.value = category;
};

// watch( bread, ()=> {
//   searchText.value = "";
// })

const productsList = computed({
  get: () => {
    // 如果 category === "all" 顯示全部資料
    if (route.query?.category === "all") {
      isLoading.value = false;
      return products.value;
      // 如果 category === "menu.key" 顯示對應 key 資料
    } else if (route.query?.category && searchText.value === "") {
      const category = menu.value.filter((el) => el.key === route.query?.category);
      isLoading.value = false;
      return products.value.filter((el) => el.category === category[0].name);
      // 如果 searchText 有值顯示對應 title 資料
    } else if (searchText.value) {
      isLoading.value = false;
      return products.value.filter((el) => el.title.includes(searchText.value));
    }
    // 如果都沒有顯示全部資料
    isLoading.value = false;
    return products.value;
  },
});
</script>
<template>
  <PageHeader :image-url="pageImage" />
  <loading :active="isLoading" color="#D5B690" background-color="black" />
  <div class="container">
    <div class="flex flex-col lg:flex-row justify-between lg:space-x-8 mt-5">
      <!-- 側邊篩選 -->
      <div class="dark:bg-dark_mode_2 flex flex-col bg-white self-start w-full lg:w-1/5 mb-5 p-5 border rounded-md">
        <div class="form-control">
          <input v-model="searchText" type="text" placeholder="輸入關鍵字…" class="input input-bordered input-sm w-full" />
        </div>
        <div class="flex flex-col">
          <p class="text-xl font-bold py-4">難度選擇</p>
          <ul class="overflow-x-auto lg:overflow-visible flex flex-row items-center lg:flex-col w-full">
            <RouterLink :to="{ name: 'product', query: { category: item.key } }" v-for="item in productMenu" :key="item.name" :class="{ active: isCategoryActive(item.key) }" @click="handleTabClick(item.key)" class="font-bold cursor-pointer group w-[30%] lg:w-full">
              <div class="flex items-center h-12 lg:h-auto after:content-['chevron\_right'] after:hidden lg:after:block group-[.active]:bg-primary after:ml-auto after:font-['Material_Symbols_Outlined'] p-3 lg:border-b lg:border-gray-200 cursor-pointer transition-all group-hover:bg-primary">
                <p class="flex-1 pr-2 whitespace-nowrap text-center lg:text-start">{{ item.name === "Product" ? "All" : item.name }}</p>
              </div>
            </RouterLink>
          </ul>
        </div>
      </div>
      <!-- 行程列表 -->
      <div v-show="!isLoading" class="lg:flex-auto w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-6">
          <template v-for="product in productsList" :key="product.id">
            <ProductItem :product="product" />
          </template>
        </div>
        <div v-if="productsList.length === 0" class="flex flex-col justify-center space-y-4 max-w-[800px] mx-auto">
          <p class="text-center">找不到符合的關鍵字，請重新搜尋</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped></style>
