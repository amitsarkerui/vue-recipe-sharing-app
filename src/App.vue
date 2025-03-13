<template>
  <Nav />
  <router-view />
  <Footer />
</template>

<script>
import Nav from "./components/Shared/Nav.vue";
import Footer from "./components/Shared/Footer.vue";
export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },
};
</script>

<style scoped></style>
