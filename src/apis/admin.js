// import req from "./https";
// const { VITE_PATH } = import.meta.env;

// const apiLogin = (data) => req("post", `admin/signin`, data);
// const apiCheck = () => req("post", "api/user/check");
// const apiLogout = () => req("post", "logout");

// console.log(apiCheck);
// // Upload Img
// const apiUploadImg = (data, onProgress) => req("post", `api/${VITE_PATH}/admin/upload`, data, onProgress);

// // Get Admin Data List
// const apiGetAdminData = (slug, page) => req("get", `api/${VITE_PATH}/admin/${slug}?page=${page}`);

// // Update Admin Data List
// const apiUpdateAdminData = (http, slug, data) => (`${http}`, `api/${VITE_PATH}/admin/${slug}`, { data })

// // Delete Admin Data List
// const apiDelAdminData = (slug, id) => req("delete", `api/${VITE_PATH}/admin/${slug}/${id}`)

// export { apiLogin, apiCheck, apiLogout, apiUploadImg, apiGetAdminData, apiDelAdminData, apiUpdateAdminData };
