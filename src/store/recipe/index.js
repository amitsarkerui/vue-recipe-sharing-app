import Parse from "parse/dist/parse.min.js";

const state = () => ({
  recipes: [],
});
const getters = {
  getAllRecipes: (state) => {
    return state.recipes;
  },
};
const mutations = {
  SetAllRecipes: (state, recipes) => (state.recipes = recipes),
};
const actions = {
  async FETCH_ALL_RECIPE(context) {
    try {
      const recipeQuery = new Parse.Query("Recipe");
      const recipes = await recipeQuery.find();
      console.log("Recipe inside Actions", recipes);
      context.commit("SetAllRecipes", recipes);
    } catch (error) {
      console.error(error);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
