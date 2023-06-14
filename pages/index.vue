<template>
  <Head>
    <link
      href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
      rel="stylesheet"
    />
  </Head>
  <div class="container" id="snow">
    <Nav>component</Nav>
    <div class="content">
      <h1>Welcome to my site.</h1>
      <img src="face.png" alt="rough cutout of a floating face" />
      <p>
        This is just a little landing page, nothing too interesting. I'm a
        fullstack developer based in Brighton. I studied English and Creative
        Writing at Birkbeck, University of London and caught the coding bug
        after graduating.
      </p>
    </div>
  </div>
</template>

<style scoped>
.content {
  background-color: #ff7845;
  width: 60%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border-radius: 40px;
  box-shadow: 10px 5px 5px #a1e636b5;
  text-align: center;
  font-family: "Righteous";
}

.content p {
  font-size: 17px;
}

img {
  width: 36%;
}

#snow {
  background: none;
  background-image: url("tangerine-border.png"), url("tangerine-grid-md.png"),
    url("tangerine-grid-sm.png");
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  animation: snow 1000s linear infinite;
  transform: translate(0, 0);
}
@keyframes snow {
  0% {
    background-position: 0px 0px, 0px 0px, 0px 0px;
  }
  100% {
    background-position: 50000px 50000px, 10000px 20000px, -10000px 15000px;
  }
}

@media only screen and (min-width: 600px) {
  .content {
    font-size: 21px;
  }
  img {
    width: 25%;
  }
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
