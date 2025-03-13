<template>
  <div class="bg-[#F7F5F4]">
    <div
      class="max-w-screen-xl px-4 mx-auto flex flex-col items-center justify-center pt-14"
    >
      <span class="flex gap-4 text-gray-600"
        ><OhVueIcon
          name="bi-facebook"
          class="bg-[#DDE6CE] p-2 rounded-full hover:text-primary cursor-pointer h-10 w-10" />
        <OhVueIcon
          name="bi-instagram"
          class="bg-[#DDE6CE] p-2 rounded-full hover:text-primary cursor-pointer h-10 w-10" />
        <OhVueIcon
          name="bi-pinterest"
          class="bg-[#DDE6CE] p-2 rounded-full hover:text-primary cursor-pointer h-10 w-10" />
        <OhVueIcon
          name="bi-youtube"
          class="bg-[#DDE6CE] p-2 rounded-full hover:text-primary cursor-pointer h-10 w-10"
      /></span>
      <span class="my-5 flex gap-3 items-baseline">
        <router-link class="text-gray-500"> Breakfast</router-link>
        <div class="bg-primary w-2 h-2 rounded-full"></div>
        <router-link class="text-gray-500"> Lunch</router-link>
        <div class="bg-primary w-2 h-2 rounded-full"></div>
        <router-link class="text-gray-500"> Dinner</router-link>
        <div class="bg-primary w-2 h-2 rounded-full"></div>
        <router-link class="text-gray-500"> Snacks</router-link>
        <div class="bg-primary w-2 h-2 rounded-full"></div>
        <router-link class="text-gray-500"> Desserts</router-link>
        <div class="bg-primary w-2 h-2 rounded-full"></div>
        <router-link class="text-gray-500"> Vegan</router-link>
        <div class="bg-primary w-2 h-2 rounded-full"></div>
        <router-link class="text-gray-500"> Grilling</router-link>
        <div class="bg-primary w-2 h-2 rounded-full"></div>
        <router-link class="text-gray-500"> Baking</router-link>
      </span>
    </div>
    <hr class="text-gray-200 pb-6" />
    <p class="text-center text-gray-500 pb-6">
      All rights reserved by Amit Sarker
    </p>
  </div>
</template>

<script>
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  BiFacebook,
  BiInstagram,
  BiPinterest,
  BiYoutube,
} from "oh-vue-icons/icons";
addIcons(BiFacebook, BiInstagram, BiPinterest, BiYoutube);
export default {
  name: "Footer",
  components: {
    OhVueIcon,
  },
};
</script>

<style scoped></style>
