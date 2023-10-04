// 統一管理 API 教學 https://ithelp.ithome.com.tw/articles/10230336
import axios from "axios";
// import router from "@/router";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API,
  headers: { "Content-Type": "application/json" },
  timeout: 20000,
});

// request 的攔截器
instance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("climbingToken") || null;
    if (token) {
      config.headers.Authorization = token;
      instance.defaults.headers.common.Authorization = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
)
// // 加入 request 攔截
// instance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("metawall");
//     if (token) config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error) => Promise.reject(error),
// );



// response 攔截器
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          alert("Page Not Found");
          break;
        case 500:
          alert("programming Error");
          break;
        default:
          alert(error.message)
      }
    }
    if (!window.navigator.onLine) {
      alert("Something wrong with the network, plz reconnect.");
      return;
    }
    return Promise.reject(error);
  }
)


/**
 * Web API 
 */

// getProduct
async function getProduct(id) {
  return instance.get(`api/${import.meta.env.VITE_PATH}/product/${id}`)
}

// getProducts
async function getProducts() {
  return instance.get(`api/${import.meta.env.VITE_PATH}/products/all`)
}


/**
 * Admin API
 */

// Login
async function login(data) {
  return instance.post('admin/signin', data)
}

// Check
async function check() {
  return instance.post('api/user/check')
}

// Logout
async function logout() {
  return instance.post('logout')
}


// export default (method, url, data = null, settings) => {
//   method = method.toLowerCase();
//   if (method === "get") return instance.get(url, data, settings);
//   else if (method === "post") return instance.post(url, data, settings);
//   else if (method === "patch") return instance.patch(url, data);
//   else if (method === "delete") return instance.delete(url, { params: data });
//   else console.log("未知的 method:" + method);
// };
export default {
  getProduct,
  getProducts,
  login,
  check,
  logout,
}
