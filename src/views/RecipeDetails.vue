<template>
  <div class="min-h-screen relative">
    <div
      class="absolute h-[300px] inset-0 bg-[url(/pattern-home.jpg)] bg-cover bg-center"
    ></div>
    <div class="relative max-w-screen-xl px-4 mx-auto pt-14">
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
      <h2 class="text-4xl pt-5">{{ recipe?.attributes?.title }}</h2>
      <p class="text-gray-500 mt-3">
        Category: {{ recipe?.attributes?.category }}
      </p>
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
        <div></div>
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
  },
  mounted() {
    this.$store.dispatch("FETCH_RECIPE_BY_ID", this.recipeId);
  },
  created() {
    this.recipeId = this.$route.params.id;
  },
};
</script>

<style scoped></style>
