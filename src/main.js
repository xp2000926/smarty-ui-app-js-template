import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "min-smarty-ui-vite/index.css";
import MinSmartyUI from "min-smarty-ui-vite";

createApp(App).use(MinSmartyUI).mount("#app");
