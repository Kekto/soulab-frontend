import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import axios from "axios";

const pinia = createPinia();
const app = createApp(App);

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post["Content-Type"] = "application/json";

app.use(pinia);
app.use(ElementPlus);
app.mount("#app");
