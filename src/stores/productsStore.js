const { VITE_API, VITE_PATH } = import.meta.env;
import { defineStore } from "pinia";
import { ref, reactive } from "vue";
// import { ref } from "vue";
// import { apiGetProducts } from "../apis/products";
import api from "../apis/https";
import Toast from "@/utils/Toast";
// import axios from "axios";
export const useProductsStore = defineStore("productsStore", () => {
  // 接 API 資料
  const products = ref([]);
  // const productInfo = ref(null);
  // const getProductInfo = async (id) => {
  //   try {
  //     // const res = await api.getProduct(`-NgqY7wl3yQ_vmhUoLTH`);
  //     const res = await api.getProduct(id);
  //     productInfo.value = res.data.product;
  //     console.log("2", productInfo.value);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // getProductInfo();

  // menu List
  const menu = ref([
    {
      name: "全部行程",
      link: "/product",
      key: "all",
    },
    {
      name: "輕鬆爬爬",
      link: "/product?category=輕鬆爬爬",
      key: "輕鬆爬爬",
    },
    {
      name: "流汗爬爬",
      link: "/product?category=流汗爬爬",
      key: "流汗爬爬",
    },
    {
      name: "認真爬爬",
      link: "/product?category=認真爬爬",
      key: "認真爬爬",
    },
  ]);

  // favorite
  const isFav = reactive({});
  // 獲取所有以 "climbingFav" 開頭的本地儲存名子，這些名子用於表示行程的“收藏”狀態
  const favId = Object.keys(window.localStorage).filter((el) => el.match(/climbingFav/gi));
  // forEach跑 favId ，為每个行程設置默認的“已收藏”狀態為 true
  favId.forEach((el) => {
    isFav[el] = true;
  });
  // 點擊按鈕時，執行 toggleFav，傳入 Product 的 id 作爲参数
  const toggleFav = (id) => {
    // 從本地儲存中取得與Product id 相關的“收藏”狀態
    const fav = window.localStorage.getItem("climbingFav" + id);
    // 如果 fav 值為 'y'，表示項目已經被收藏，執行取消收藏操作
    if (fav === "y") {
      window.localStorage.removeItem("climbingFav" + id);
      // 更新 isFav 中對應 id 的狀態為未收藏（false）
      isFav["climbingFav" + id] = false;
      Toast.fire({
        title: `取消行程！`,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        position: "top",
      });
    } else {
      // 如果 fav 值不為 'y'，表示項目未被收藏，執行收藏操作
      window.localStorage.setItem("climbingFav" + id, "y");
      // 更新 isFav 中對應項目的狀態為已收藏（true）
      isFav["climbingFav" + id] = true;
      Toast.fire({
        title: `新增行程！`,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        position: "top",
      });
    }
  };

  // getProducts
  const getProducts = async () => {
    try {
      const res = await api.getProducts();
      products.value = res.data.products;
    } catch (error) {
      console.log(error.message);
    }
  };
  getProducts();
  return {
    // getProductInfo,
    // productInfo,
    products,
    getProducts,
    toggleFav,
    menu,
    isFav,
  };
});
