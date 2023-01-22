import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./scss/app.scss";
import "bootstrap";
import router from "./router";

createApp(App).use(router).use(createPinia()).mount("#app");
