const { VITE_APP_URL, VITE_PATH } = import.meta.env;
import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
export const useProductsStore = defineStore("productsStore", () => {
  // 接 API 資料
  const products = ref([]);

  const getProducts = async () => {
    try {
      const res = await axios.get(`${VITE_APP_URL}/api/${VITE_PATH}/products/all`);
      products.value = res.data;
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
