<script setup>
import { ref } from "vue";
import pageImage from "@/assets/images/pageImage/productView.jpg";
import PageHeader from "@/components/PageHeader.vue";
const tabList = ["行程內容", "注意事項"];
let currentTab = ref("行程內容");

const toggle = (content) => {
  content.active = !content.active;
};
</script>

<template>
  <PageHeader :image-url="pageImage" />
  <div class="container text-text_color dark:text-white">
    <div class="flex flex-col-reverse lg:flex-row justify-between lg:space-x-8 pt-10 pb-16">
      <div class="lg:w-2/3 space-y-6">
        <p class="font-bold text-3xl">◈◈世紀奇峰巨人的酒桶◈◈大霸群峰三天三夜/免背公裝公糧帳篷睡袋/登山推薦</p>
        <div class="flex items-center pb-2 border-b border-black dark:border-white/80">
          <span class="mr-1 text-primary material-symbols-outlined"> location_on </span>
          <span class="lg:font-bold text-text_color/80 dark:text-white/90"> 新竹 </span>
        </div>
        <div class="flex flex-col pl-4">
          <div class="editor-content">
            1. 大霸尖山3492m/二等1540/百岳排名27/三尖02
            <br />
            2. 小霸尖山/3418m/百岳排名32
            <br />
            3. 伊澤山/3297m/三等6251/百岳排名52/極北
            <br />
            4. 加利山/3112m/三等6619/百岳排名87
          </div>
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
                <div>
                  **◆Day0**<br />

                  新竹民宿<br />

                  - 清泉天主堂（新竹縣五峰鄉桃山村10鄰184號）<br />

                  **◆Day1**<br />

                  民宿出發→接駁車→大霸尖山登山口<br />

                  - 04:30起床早餐(民宿提供)<br />
                  - 06:50大霸尖山登山服務站<br />
                  - 07:00大鹿林道出發<br />
                  - 12:00馬達拉溪宿營地 (有水源)(吃午餐)<br />
                  - 12:30馬達拉溪登山口出發<br />
                  - 16:00九九山莊(夜宿)(吃晚餐廚房提供)<br />
                  - 海拔爬升：2000→1750→2700 (17公里下降250公尺 4.2公里爬升1000)<br />

                  行進距離：約 21公里 行進時間： 10小時<br />

                  **◆Day2**<br />

                  九九山莊→加利山叉路口→伊澤山→中霸山屋→大霸尖山→小霸尖山→大霸尖山→中霸坪→中霸山屋→九九山莊<br />

                  - 03:30起床早餐(吃早餐廚房提供)<br />
                  - 04:30九九山莊出發<br />
                  - 06:00加利山叉路口<br />
                  - 07:30伊澤山叉路口<br />
                  - 08:30中霸山屋(有水源)<br />
                  - 09:00中霸坪<br />
                  - 09:30大霸尖山霸基<br />
                  - 10:30聖稜線叉路口<br />
                  - 11:00小霸尖山<br />
                  - 11:30聖稜線叉路口<br />
                  - 12:00大霸尖山霸基<br />
                  - 12:30中霸山屋(吃午餐)<br />
                  - 13:00中霸山屋折返<br />
                  - 14:00伊澤山<br />
                  - 15:00加利山叉路口<br />
                  - 15:30加利山登頂<br />
                  - 17:00九九山莊(晚餐山屋廚房提供)<br />
                  - 海拔爬升：2700→3297→3280→3392→3300→3418→3300→3392→3280→2700<br />
                  - (上升約1600公尺)<br />
                  - (九九山莊海拔2700、伊澤山海拔3297、中霸山屋海拔3280)<br />

                  行進距離：約 21公里 行進時間： 15小時<br />

                  **◆Day3**<br />

                  - 04:30 起床早餐(吃早餐)<br />
                  - 05:00 九九山莊出發<br />
                  - 06:30 馬達拉溪登山口<br />
                  - 13:00 大霸尖山登山服務站結束<br />
                  - 海拔爬升：2800→1750→2000<br />

                  行進距離：約 21公里 行進時間： 6.5小時<br />
                </div>
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
            <button type="button" @click="addCart(productContent, qty)" class="btn btn-outline btn-primary w-full rounded-sm">加入行程</button>
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
