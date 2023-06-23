<template>
  <Head>
    <link rel="icon" type="image/png" sizes="32x32" href="tangerine_full.png" />
    <link
      href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
      rel="stylesheet"
    />
  </Head>
  <div class="container" id="snow">
    <Nav></Nav>
    <div class="content">
      <slot></slot>
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
  color: #f5ece5;
}

#snow {
  background: none;
  background-image: url("~/assets/img/tangerine-border.png"), url("~/assets/img/tangerine-grid-md.png"),
    url("~/assets/img/tangerine-grid-sm.png");
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
}
</style>

<script>
import Nav from "@/components/Nav.vue";
import css from "assets/css/app.css";
</script>
