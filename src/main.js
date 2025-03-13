import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import Parse from "parse/dist/parse.min.js";
import store from "./store";

Parse.initialize("recipeApp");
Parse.serverURL = "http://localhost:3030/parse";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
