<template>
  <div class="container">
    <Nav>component</Nav>
    <h1>Hi! 👋 Welcome to my website.</h1>
    <img src="assets/face.png" alt="rough cutout of a floating face">
    <p>
      This is just a little landing page, nothing too interesting. I'm a fullstack developer based in Brighton. I studied English and Creative Writing at Birkbeck,
      University of London and caught the coding bug after graduating. 
    </p>
  </div>
</template>

<style scoped>
.container {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to top left, #e1ebd4 0%, #e1ebd4 50%, #f2d4da 50%, #f2d4da 100%);
}

</style>

<script>
import Nav from "@/components/Nav.vue";
import css from "assets/css/app.css";

export default {
  components: {
    Nav
  },
  data() {},
  methods: {}
};
</script>
