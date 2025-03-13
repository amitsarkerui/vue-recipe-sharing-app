<template>
  <Nav />
  <router-view />
</template>

<script>
import Nav from "./components/Shared/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style scoped></style>
