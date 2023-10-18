<script setup>
import { ref, onBeforeMount } from "vue";
import pageImage from "@/assets/images/pageImage/productView.jpg";
import PageHeader from "@/components/PageHeader.vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import api from "../apis/https";
import { useProductsStore } from "@/stores/productsStore.js";
import Loading from "vue-loading-overlay";

const route = useRoute();
const ProductsStore = useProductsStore(); // 把方法變成變數
// 從路由路徑中分割('/')字符串取得第三部分
const productId = route.path.split("/")[2];

const tabList = ["行程內容", "注意事項"];
let currentTab = ref("行程內容");

const isLoading = ref(false); // 初始值
const productInfo = ref([]);
// const productId = route.params.id;
const toggle = (content) => {
  content.active = !content.active;
};
// 文字 format
const formatText = (text) => text.replace(/\n/g, "<br >");
const getProductInfo = async (id) => {
  try {
    // const res = await api.getProduct(`-NgqY7wl3yQ_vmhUoLTH`);
    isLoading.value = true;
    const res = await api.getProduct(id);
    productInfo.value = res.data.product;
    productInfo.value.content = formatText(res.data.product.content);
    isLoading.value = false;
  } catch (error) {
    console.log(error.message);
  }
};

// onMounted(() => {
//   if(route.params.id){
//     getProductInfo(route.params.id);
//   }
// });
// 當頁面即將載入時觸發
onBeforeMount(() => {
  getProductInfo(productId);
});
// 當路由發生更新的時候觸發
onBeforeRouteUpdate((to) => {
  getProductInfo(to.path.split("/")[2]);
});
</script>

<template>
  <PageHeader :image-url="pageImage" />
  <loading :active="isLoading" color="#D5B690" background-color="black" />
  <div class="container text-text_color dark:text-white">
    <div v-show="!isLoading" class="flex flex-col-reverse lg:flex-row justify-between lg:space-x-8 pt-10 pb-16">
      <div class="lg:w-2/3 space-y-6">
        <p class="font-bold text-3xl">{{ productInfo.title }}</p>
        <div class="flex items-center pb-2 border-b border-black dark:border-white/80">
          <span class="mr-1 text-primary material-symbols-outlined"> location_on </span>
          <span class="lg:font-bold text-text_color/80 dark:text-white/90"> {{ productInfo.location }} </span>
        </div>
        <div class="flex flex-col pl-4">
          <div v-html="productInfo.description"></div>
        </div>
        <div class="flex flex-col">
          <ul class="flex border-b border-black dark:border-white/80 mb-5">
            <li class="group" :class="{ active: currentTab === tab }" v-for="tab in tabList" :key="tab" @click="currentTab = tab">
              <div class="flex items-center justify-center py-2 px-4 font-semibold group-[.active]:text-text_color dark:group-[.active]:text-white group-[.active]:bg-primary cursor-pointer">
                {{ tab }}
              </div>
            </li>
          </ul>
          <div class="flex flex-col pl-4">
            <transition name="fade" mode="out-in">
              <div class="editor-content block" v-if="currentTab === '行程內容'">
                <!-- <div>
                  {{ productInfo.content }}
                </div> -->
                <div v-html="productInfo.content"></div>
              </div>
              <div class="block" v-else-if="currentTab === '注意事項'">
                <ol class="space-y-2 pt-3 pl-5 en-caption-02 leading-7.5 font-bold list-decimal">
                  <li>出發前請留意氣象資訊，山區天氣變化多端，早晚以及越往山上溫差越大，穿著建議以洋蔥式穿法。</li>
                  <li>白天天氣炎熱時請多補充水分，入夜天氣變涼，請記得做好保暖，避免讓身體有所不適。</li>
                  <li>任何時候如有擔心、害怕、心生疑慮，遇到不敢通過的地形，請告知身邊朋友，請他們協助。</li>
                  <li>請自備垃圾袋，用過的衛生紙、濕紙巾或是衛生棉請務必自行帶走，請勿隨意亂丟，破壞自然生態。</li>
                  <li>如果有心也能盡自己一份力，下山途中隨手撿起路途上所看到的垃圾。</li>
                  <li>初學者如尚不適應登山行程、裝備不熟悉者，切記量力而為，建議背包總重量(含背包本身、行動水、午餐、行動糧)控制在八公斤以下。</li>
                  <li>建議攜帶水量最少為1000cc，每人習慣飲用量不一，自行斟酌。建議攜帶保溫瓶，或耐高溫容器盛水</li>
                  <li>由於車程時間較長，請記得會暈車的提前吃暈車藥，才能讓行程順利進行，。</li>
                  <li>請務必記得攜帶可以證明個人身份之證件，此為了用來核對入山之人員身份，如為外籍夥伴，請記得攜帶護照正本。</li>
                  <li>出發前，如果怕會有高山症的情況發生，可以去看旅遊醫學門診，拿丹木斯(預防用藥)來吃，事先預防高山症的發生。</li>
                  <li>請在出發前就多自主訓練，訓練方向請針對心肺和肌力，跑步、游泳、重訓、深蹲。</li>
                  <li>請審慎評估自身能力才進行登山活動</li>
                  <li>此次行程安全為第一考量，落實無痕山林，一起當個友愛大自然的孩子吧！</li>
                  <li>爬山過程中，如遇身體不適，或有任何情況發生，請盡快告知身邊的人，請勿硬撐而讓自己陷入危險當中。</li>
                  <li>希望以上注意事項說明能為您提供幫助，祝您旅途愉快！</li>
                </ol>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:w-1/3 mb-8 lg:mb-0">
        <div class="sticky top-[72px] inset-x-0 p-6 space-y-6 bg-base-100 dark:bg-dark_mode_2 border border-primary rounded-sm">
          <p class="text-lg text-center">心動不如馬上行動，加入行程展開活動</p>
          <div class="">
            <!--用product.id 當對應的值 <p>{{ productInfo.id }}</p> -->
            <button type="button" @click.prevent="ProductsStore.toggleFav(productInfo.id)" class="btn btn-outline btn-primary w-full rounded-sm">
              <!-- 加入行程 -->
              <span v-if="ProductsStore.isFav['climbingFav' + productInfo.id]">取消行程</span>
              <span v-else>加入行程</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scope>
// tab 進出場的動畫
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
