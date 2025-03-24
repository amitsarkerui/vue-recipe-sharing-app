<template>
  <div class="min-h-screen relative">
    <div
      class="absolute h-[300px] inset-0 bg-[url(/pattern-home.jpg)] bg-cover bg-center"
    ></div>
    <div class="relative max-w-screen-xl px-4 mx-auto pt-14">
      <div class="flex gap-8 items-center justify-between">
        <div>
          <h2 class="text-4xl pt-5">{{ recipe?.attributes?.title }}</h2>
          <span class="flex gap-5 items-center mt-5">
            <span class="flex gap-2 items-center">
              <img
                class="h-10 w-10 object-cover rounded-full"
                :src="author?.attributes?.userImage?._url"
                alt=""
              />
              <p class="text-gray-500">by : {{ author?.attributes?.name }}</p>
            </span>
            <div class="h-6 w-[1px] bg-gray-300"></div>
            <p class="text-gray-500 mt-1">
              Category : {{ recipe?.attributes?.category }}
            </p>
          </span>
        </div>
        <div class="flex gap-7 flex-wrap">
          <span class="flex gap-3 items-center">
            <img class="h-12" src="/icons/prep.svg" alt="" />
            <span>
              <p class="text-xs text-primary">Preparation Time:</p>
              <p class="font-semibold text-gray-700">
                {{ recipe?.attributes?.prepTime }}
              </p>
            </span>
          </span>
          <span class="flex gap-3 items-center">
            <img class="h-12" src="/icons/cookTime.svg" alt="" />
            <span>
              <p class="text-xs text-primary">Cook Time:</p>
              <p class="font-semibold text-gray-700">
                {{ recipe?.attributes?.cookTime }}
              </p>
            </span>
          </span>
          <span class="flex gap-3 items-center">
            <img class="h-12" src="/icons/servings.svg" alt="" />
            <span>
              <p class="text-xs text-primary">Servings:</p>
              <p class="font-semibold text-gray-700">
                {{ recipe?.attributes?.servings }}
              </p>
            </span>
          </span>
        </div>
      </div>
      <img
        class="mt-8 w-full h-[550px] object-cover"
        :src="recipe?.attributes?.image?._url"
        alt=""
      />
      <div class="grid grid-cols-1 gap-8 md:grid-cols-4 mt-5">
        <div class="md:col-span-3">
          <p class="text-lg font-semibold text-gray-700 mb-4">
            {{ recipe?.attributes?.description }}
          </p>
          <h3 class="text-xl text-primary mb-2">Ingredients:</h3>
          <div
            v-for="(ingredient, index) in recipe?.attributes?.ingredients"
            :key="index"
          >
            <span class="flex items-center gap-3 mb-2">
              <div class="bg-primary h-2 w-2 rounded-full"></div>
              <p class="text-gray-500">{{ ingredient }}</p>
            </span>
          </div>
          <div class="mt-6 mb-12">
            <h3 class="text-xl text-primary mb-2">Steps:</h3>
            <div
              v-for="(step, index) in recipe?.attributes?.steps"
              :key="index"
            >
              <span class="flex gap-3 mb-2">
                <p class="font-medium">Step {{ index + 1 }} :</p>
                <p class="text-gray-500">{{ step }}</p>
              </span>
            </div>
          </div>
          <hr class="text-gray-300" />
          <!-- Comment Sections -->
          <div class="my-10">
            <h3 class="text-xl text-gray-600">Leave a comment</h3>
            <div>
              <form @submit.prevent="handleComment">
                <div class="grid grid-cols-1 gap-8 md:grid-cols-2 my-5">
                  <div class="w-full">
                    <input
                      v-model="formData.name"
                      class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                      autocomplete=""
                      placeholder="Name"
                      type="text"
                    />
                  </div>
                  <div class="w-full">
                    <input
                      v-model="formData.email"
                      class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                      autocomplete=""
                      placeholder="Email"
                      type="email"
                    />
                  </div>
                </div>
                <div class="w-full mb-5">
                  <textarea
                    v-model="formData.details"
                    class="h-[150px] w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    autocomplete=""
                    placeholder="Details"
                    type="email"
                  />
                </div>
                <button type="submit" class="btn btn-primary">Comment</button>
              </form>
              <hr class="text-gray-300 my-10 opacity-30" />
              <div
                v-for="comment in comments"
                :key="comment.id"
                class="mb-4 rounded-lg"
              >
                <div class="flex gap-10">
                  <p class="text-gray-700 font-semibold">
                    {{ comment.name }}
                  </p>
                  <p class="text-gray-500 text-sm">{{ comment.timeAgo }}</p>
                </div>
                <p class="text-gray-600">{{ comment.details }}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-2xl text-gray-600 mb-7">More from this Author:</h3>
          <div v-for="recipe in authorRecipes" :key="recipe.id">
            <router-link :to="`/recipe/${recipe.id}`">
              <RecipeCardHorizontal :recipe="recipe" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeCardHorizontal from "../components/RecipeCardHorizontal.vue";
import { formatDistanceToNow } from "date-fns";
export default {
  name: "RecipeDetails",
  components: {
    RecipeCardHorizontal,
  },
  data() {
    return {
      recipeId: null,
      formData: {
        name: "",
        email: "",
        details: "",
      },
    };
  },
  computed: {
    recipe() {
      return this.$store.getters.getRecipeById;
    },

    author() {
      return this.$store.getters.getUserById(
        this.recipe?.attributes?.relatedUser?.id
      );
    },
    authorRecipes() {
      return this.$store.getters.getAuthorRecipes;
    },
    comments() {
      return this.$store.getters.getCurrentRecipeComments.map((comment) => ({
        ...comment.attributes,
        // details: comment.attributes?.details || "No details available",
        timeAgo: formatDistanceToNow(
          new Date(comment.attributes?.createdAt || new Date()),
          {
            addSuffix: true,
          }
        ),
      }));
    },
  },
  methods: {
    async handleComment() {
      const res = await this.$store.dispatch("CREATE_COMMENT", {
        recipeId: this.recipeId,
        formData: this.formData,
      });
      // console.log(res);
      if (res.id) {
        this.formData.name = "";
        this.formData.email = "";
        this.formData.details = "";
      }
    },
  },
  watch: {
    "$route.params.id": {
      immediate: true,
      handler(newId) {
        if (newId) {
          this.recipeId = newId;
          this.$store.dispatch("FETCH_RECIPE_BY_ID", newId);
        }
      },
    },
    recipe(newRecipe) {
      if (newRecipe && newRecipe.attributes.relatedUser.id) {
        this.$store.dispatch(
          "FIND_USER_BY_ID",
          this.recipe?.attributes?.relatedUser.id
        );
        this.$store.dispatch(
          "FIND_AUTHOR_RECIPES",
          this.recipe?.attributes.relatedUser.id
        );
        this.$store.dispatch("FETCH_CURRENT_RECIPE_COMMENTS", this.recipeId);
      }
    },
    comments(newComments) {
      if (newComments) {
        this.$store.dispatch("FETCH_CURRENT_RECIPE_COMMENTS", this.recipeId);
      }
    },
  },
  mounted() {
    this.recipeId = this.$route.params.id;
    this.$store.dispatch("FETCH_RECIPE_BY_ID", this.recipeId);
    this.$store.dispatch("FETCH_CURRENT_RECIPE_COMMENTS", this.recipeId);
  },
};
</script>
