import { createApp } from "vue";
import App from "./App.vue";
import RUI from "../packages/index";

const app = createApp(App);
app.use(RUI);
app.mount("#app");
