import { createApp } from "vue";
import App from "./App.vue";
// import RUI from "../packages/index";
import RainUI from "rain-ui-zzy";
import "../node_modules/rain-ui-zzy/dist/style.css";

const app = createApp(App);
app.use(RainUI);
app.mount("#app");
