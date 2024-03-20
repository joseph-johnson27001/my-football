import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Assuming your router configuration is in router/index.js

createApp(App).use(router).mount("#app");
