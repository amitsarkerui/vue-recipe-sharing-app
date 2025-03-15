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
          <div class="my-6">
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
        </div>
        <div>
          <h3>More from this Author:</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeDetails",
  data() {
    return {
      recipeId: null,
    };
  },
  computed: {
    recipe() {
      return this.$store.getters.getRecipeById;
    },
    author() {
      return this.$store.getters.getUserById;
    },
  },
  watch: {
    recipe(newRecipe) {
      if (newRecipe && newRecipe.attributes.relatedUser.id) {
        this.$store.dispatch(
          "FIND_USER_BY_ID",
          this.recipe?.attributes?.relatedUser.id
        );
        this.$store.dispatch(
          "FIND_RECIPES_BY_USER_ID",
          this.recipe?.attributes.relatedUser.id
        );
      }
    },
  },
  mounted() {
    this.recipeId = this.$route.params.id;
    this.$store.dispatch("FETCH_RECIPE_BY_ID", this.recipeId);
  },
};
</script>

<style scoped></style>
