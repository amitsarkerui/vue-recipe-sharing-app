import Parse from "parse/dist/parse.min.js";

const state = () => ({
  recipes: [],
  usersById: {},
  recipeById: {},
  authorRecipes: [],
});
const getters = {
  getAllRecipes: (state) => {
    return state.recipes;
  },
  getUserById: (state) => (userId) => state.usersById[userId],
  getRecipeById: (state) => state.recipeById,
  getAuthorRecipes: (state) => state.authorRecipes,
};
const mutations = {
  SetAllRecipes: (state, recipes) => (state.recipes = recipes),
  SetUserById: (state, { userId, user }) => {
    state.usersById = { ...state.usersById, [userId]: user };
  },
  SetRecipeById: (state, recipe) => (state.recipeById = recipe),
  setAuthorRecipes: (state, recipes) => (state.authorRecipes = recipes),
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
  async FIND_AUTHOR_RECIPES(context, authorId) {
    console.log(authorId);
    const recipeQuery = new Parse.Query("Recipe");
    recipeQuery.equalTo("relatedUser", {
      __type: "Pointer",
      className: "_User",
      objectId: authorId,
    });
    const res = await recipeQuery.find();
    console.log(res);
    context.commit("setAuthorRecipes", res);
  },
  async CREATE_COMMENT(context, { recipeId, fromData }) {
    try {
      const comment = new Parse.Object("Comment");
      console.log(recipeId, fromData);
      const dataToSave = {
        ...fromData,
        relatedRecipe: {
          __type: "Pointer",
          className: "Recipe",
          objectId: recipeId,
        },
      };
      comment.set(dataToSave);
      const res = await comment.save();
      return res;
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
