<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { NModal } from "naive-ui";
import { useProductsStore } from "@/stores/productsStore.js";

const route = useRoute();
const router = useRouter();
const ProductsStore = useProductsStore(); // 把方法變成變數

const showModal = ref(false);
const clickBtn = () => {
  showModal.value = true;
};
onMounted(() => {
  router.afterEach(() => {
    showModal.value = false;
  });
});
</script>
<template>
  <button @click.prevent="clickBtn" class="btn btn-ghost btn-circle">
    <span class="material-symbols-outlined"> hiking </span>
  </button>
  <NModal v-model:show="showModal" :block-scroll="false" title="下次就要去爬.." preset="card" style="max-width: 95%; width: 650px">
    <template v-for="item in ProductsStore.products" :key="item.id">
      <div v-if="ProductsStore.isFav['climbingFav' + item.id]" class="flex justify-between items-center py-2">
        <a
          href="#"
          @click.prevent="
            showModal = false;
            router.push('/product/' + item.id);
          "
          class="flex-1 flex items-center cursor-pointer">
          <img :src="item.imagesUrl[0]" :alt="item.title" class="w-16 sm:w-24 rounded-lg" />
          <span class="relative after:absolute after:bg-primary/70 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 md:text-base ml-4"> {{ item.title }} / {{ item.itinerary }} </span>
        </a>
        <a href="#" @click.prevent="ProductsStore.toggleFav(item.id)" title="Remove Fav" class="p-2 -ml-2 cursor-pointer">
          <div class="relative before:absolute before:bg-red-500 before:bottom-[35%] before:left-[25%] before:h-2/5 before:w-[50%] before:origin-bottom before:scale-y-[0.05] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500">
            <span class="relative material-symbols-outlined"> delete </span>
          </div>
        </a>
      </div>
    </template>
    <div v-if="Object.values(ProductsStore.isFav).every((el) => el === false)" class="flex flex-col gap-2 items-center justify-center">
      <img src="@/assets/images/noData.png" class="w-4/5 sm:w-48 h-auto" alt="no data" />
      <p class="text-base text-text_color">
        還沒有想要爬的山喔~
        <a
          href="”#”"
          @click.prevent="
            showModal = false;
            router.push('/product');
          "
          class="cursor-pointer">
          <span class="relative after:absolute after:bg-primary/80 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"> 去推薦行程看看 </span>
        </a>
      </p>
    </div>
  </NModal>
</template>
