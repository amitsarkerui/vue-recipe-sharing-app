import { createStore } from "vuex";
import recipe from "./recipe/";
const store = createStore({
  modules: {
    recipe,
  },
});

export default store;
