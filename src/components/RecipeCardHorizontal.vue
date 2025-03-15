<template>
  <div class="p-3 bg-[#F7F4EE] my-5">
    <div class="flex gap-4 items-center">
      <img
        class="h-16 w-20 object-cover"
        :src="recipe?.attributes?.image?._url"
        alt=""
      />
      <p class="text-gray-600 font-semibold">{{ recipe?.attributes?.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeCardHorizontal",
  props: {
    recipe: Object,
  },
};
</script>

<style scoped></style>
