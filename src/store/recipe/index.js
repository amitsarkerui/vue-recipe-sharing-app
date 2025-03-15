import Parse from "parse/dist/parse.min.js";

const state = () => ({
  recipes: [],
  usersById: {},
  recipeById: {},
});
const getters = {
  getAllRecipes: (state) => {
    return state.recipes;
  },
  getUserById: (state) => (userId) => state.usersById[userId],
  getRecipeById: (state) => state.recipeById,
};
const mutations = {
  SetAllRecipes: (state, recipes) => (state.recipes = recipes),
  SetUserById: (state, { userId, user }) => {
    state.usersById = { ...state.usersById, [userId]: user };
  },
  SetRecipeById: (state, recipe) => (state.recipeById = recipe),
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
      context.commit("SetUserById", { userId, user: result });
    } catch (error) {
      console.error(error);
    }
  },
  async FETCH_RECIPE_BY_ID(context, recipeId) {
    try {
      const recipeQuery = new Parse.Query("Recipe");
      const res = await recipeQuery.get(recipeId);
      console.log(res);
      context.commit("SetRecipeById", res);
    } catch (error) {
      console.error(error);
    }
  },
  async FIND_RECIPES_BY_USER_ID(context, authorId) {
    console.log(authorId);
    const recipeQuery = new Parse.Query("Recipe");
    recipeQuery.equalTo("relatedUser", {
      __type: "Pointer",
      className: "_User",
      objectId: authorId,
    });
    const res = await recipeQuery.find();
    console.log(res);
    context.commit("SetRecipeByUserId", res);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
