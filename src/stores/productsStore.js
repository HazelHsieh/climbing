const { VITE_API, VITE_PATH } = import.meta.env;
import { defineStore } from "pinia";
import { ref } from "vue";
// import { apiGetProducts } from "../apis/products";
import api from "../apis/https";
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
  };
});
