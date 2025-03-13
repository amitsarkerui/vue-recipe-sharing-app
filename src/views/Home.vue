<template>
  <!-- Hero Area -->
  <div class="relative h-[800px] w-full mt-3">
    <div
      class="bg-[url(/hero-images.jpg)] absolute w-full h-full bg-cover filter blur-[2px]"
    ></div>
    <div class="absolute inset-0 bg-black opacity-85">
      <div
        class="max-w-screen-xl px-4 mx-auto inset-0 absolute flex flex-col justify-center items-center"
      >
        <h1 class="text-white text-5xl">Discover & Share Delicious Recipes</h1>
        <p class="text-white text-center max-w-[700px] mt-7">
          Dive into a world of rich flavors and endless culinary possibilities.
          Unleash your creativity in the kitchen, experiment with new recipes,
          and craft mouthwatering dishes that delight the senses. Join our
          vibrant community of passionate home cooks and food lovers today!
        </p>
        <button class="btn btn-primary mt-7">Get Started</button>
      </div>
    </div>
  </div>
  <!-- Category -->
  <div class="max-w-screen-xl px-4 mx-auto my-20">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-4 text-center">
      <div
        class="p-8 bg-[#F7F4EE] flex flex-col justify-center items-center rounded-xl hover:bg-secondary hover:text-white cursor-pointer"
      >
        <img class="h-16" :src="breakFastIcons" alt="" />
        <h3 class="text-lg my-2">Breakfast</h3>
        <span class="bg-[#DDE6CE] text-primary px-4 py-1 rounded-md"
          >8 Recipes</span
        >
      </div>
      <div
        class="p-8 bg-[#F7F4EE] flex flex-col justify-center items-center rounded-xl hover:bg-secondary hover:text-white cursor-pointer"
      >
        <img class="h-16" :src="lunch" alt="" />
        <h3 class="text-lg my-2">Lunch</h3>
        <span class="bg-[#DDE6CE] text-primary px-4 py-1 rounded-md"
          >10 Recipes</span
        >
      </div>
      <div
        class="p-8 bg-[#F7F4EE] flex flex-col justify-center items-center rounded-xl hover:bg-secondary hover:text-white cursor-pointer"
      >
        <img class="h-16" :src="dinner" alt="" />
        <h3 class="text-lg my-2">Dinner</h3>
        <span class="bg-[#DDE6CE] text-primary px-4 py-1 rounded-md"
          >6 Recipes</span
        >
      </div>
      <div
        class="p-8 bg-[#F7F4EE] flex flex-col justify-center items-center rounded-xl hover:bg-secondary hover:text-white cursor-pointer"
      >
        <img class="h-16" :src="snacks" alt="" />
        <h3 class="text-lg my-2">Snacks</h3>
        <span class="bg-[#DDE6CE] text-primary px-4 py-1 rounded-md"
          >16 Recipes</span
        >
      </div>
      <div
        class="p-8 bg-[#F7F4EE] flex flex-col justify-center items-center rounded-xl hover:bg-secondary hover:text-white cursor-pointer"
      >
        <img class="h-16" :src="desserts" alt="" />
        <h3 class="text-lg my-2">Desserts</h3>
        <span class="bg-[#DDE6CE] text-primary px-4 py-1 rounded-md"
          >18 Recipes</span
        >
      </div>
      <div
        class="p-8 bg-[#F7F4EE] flex flex-col justify-center items-center rounded-xl hover:bg-secondary hover:text-white cursor-pointer"
      >
        <img class="h-16" :src="vegan" alt="" />
        <h3 class="text-lg my-2">Vegan</h3>
        <span class="bg-[#DDE6CE] text-primary px-4 py-1 rounded-md"
          >10 Recipes</span
        >
      </div>
      <div
        class="p-8 bg-[#F7F4EE] flex flex-col justify-center items-center rounded-xl hover:bg-secondary hover:text-white cursor-pointer"
      >
        <img class="h-16" :src="grilling" alt="" />
        <h3 class="text-lg my-2">Grilling</h3>
        <span class="bg-[#DDE6CE] text-primary px-4 py-1 rounded-md"
          >12 Recipes</span
        >
      </div>
      <div
        class="p-8 bg-[#F7F4EE] flex flex-col justify-center items-center rounded-xl hover:bg-secondary hover:text-white cursor-pointer"
      >
        <img class="h-16" :src="baking" alt="" />
        <h3 class="text-lg my-2">Baking</h3>
        <span class="bg-[#DDE6CE] text-primary px-4 py-1 rounded-md"
          >27 Recipes</span
        >
      </div>
    </div>
  </div>
  <!-- Recipes -->
  <section class="relative py-16">
    <!-- Background Pattern -->
    <div
      class="absolute inset-0 bg-[url(/pattern-home.jpg)] bg-cover bg-center"
    ></div>

    <!-- Content -->
    <div class="relative max-w-screen-xl mx-auto px-4">
      <h3 class="text-primary text-lg text-center">Recent Recipes</h3>
      <h2 class="text-4xl font-bold text-center mt-2">Latest Recipes</h2>

      <!-- Recipe Grid -->
    </div>
  </section>
</template>

<script>
import breakFastIcons from "/icons/Breakfast.svg";
import lunch from "/icons/Lunch .svg";
import dinner from "/icons/Dinner .svg";
import snacks from "/icons/Snacks .svg";
import desserts from "/icons/Desserts .svg";
import vegan from "/icons/Vegan .svg";
import grilling from "/icons/Grilling .svg";
import baking from "/icons/Baking .svg";

export default {
  name: "Home",
  data() {
    return {
      breakFastIcons,
      lunch,
      dinner,
      snacks,
      desserts,
      vegan,
      grilling,
      baking,
    };
  },
  computed: {
    recipes() {
      return this.$store.getters.getAllRecipes;
    },
  },
  mounted() {
    this.$store.dispatch("FETCH_ALL_RECIPE");
  },
};
</script>

<style scoped></style>
