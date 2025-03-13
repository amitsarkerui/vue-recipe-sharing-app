import Parse from "parse/dist/parse.min.js";

const state = () => ({
  recipes: [],
  userById: {},
});
const getters = {
  getAllRecipes: (state) => {
    return state.recipes;
  },
  getUserById: (state) => state.userById,
};
const mutations = {
  SetAllRecipes: (state, recipes) => (state.recipes = recipes),
  SetUserById: (state, user) => (state.userById = user),
};
const actions = {
  async FETCH_ALL_RECIPE(context) {
    try {
      const recipeQuery = new Parse.Query("Recipe");
      const recipes = await recipeQuery.find();
      //   console.log("Recipe inside Actions", recipes);
      context.commit("SetAllRecipes", recipes);
    } catch (error) {
      console.error(error);
    }
  },
  async FIND_USER_BY_ID(context, userId) {
    try {
      console.log("userid", userId);
      const userQuery = new Parse.Query("_User");
      const result = await userQuery.get(userId);
      context.commit("SetUserById", result);
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
