<template>
  <div class="p-7 bg-white rounded-md border border-gray-100 cursor-pointer">
    <img :src="recipe?.attributes.image" alt="Recipe Images" />
    <div class="my-4">
      <p class="text-xs bg-[#DDE6CE] inline px-3 py-1 rounded-2xl text-primary">
        Prep Time : {{ recipe?.attributes?.prepTime }}
      </p>
      <p
        class="text-xs bg-[#DDE6CE] inline px-3 py-1 rounded-2xl text-primary ml-3"
      >
        Cook : {{ recipe?.attributes?.cookTime }}
      </p>
    </div>
    <h3 class="mb-3 text-xl text-gray-700">{{ recipe?.attributes?.title }}</h3>
    <p class="text-gray-400">{{ recipe?.attributes?.description }}</p>
    <div class="mt-4 flex gap-4 items-center">
      <img
        class="h-10 w-10 object-cover rounded-full"
        :src="author?.attributes?.userImage._url"
        alt=""
      />

      <p class="text-gray-400">by {{ author?.attributes?.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  props: {
    recipe: Object,
  },
  computed: {
    userId() {
      return this.recipe?.attributes?.relatedUser?.id;
    },
    author() {
      return this.$store.getters.getUserById;
    },
  },
  mounted() {
    this.$store.dispatch("FIND_USER_BY_ID", this.userId);
  },
};
</script>

<style scoped></style>
