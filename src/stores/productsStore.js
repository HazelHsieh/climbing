const { VITE_API, VITE_PATH } = import.meta.env;
import { defineStore } from "pinia";
import { ref } from "vue";
// import { apiGetProducts } from "../apis/products";
import api from "../apis/https"
import axios from "axios";
export const useProductsStore = defineStore("productsStore", () => {
  // 接 API 資料
  const products = ref([]);
  const getProducts = async () => {
    try {
      // const res = await axios.get(`${VITE_API}/api/${VITE_PATH}/products/all`);
      // const res = await apiGetProducts();
      const res = await api.getProducts();
      products.value = res.data.products;
      // console.log("ccc", products.value);
    } catch (error) {
      console.log(error.message);
    }
  };
  getProducts();
  return {
    products,
    getProducts,
  };
});
