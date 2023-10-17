import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import AOS from "aos";

// filter
import filter from "./utils/filter";

import "vue-loading-overlay/dist/css/index.css";
import "./assets/main.css";
import "aos/dist/aos.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.provide("$filter", filter);
app.mount("#app");
AOS.init();
