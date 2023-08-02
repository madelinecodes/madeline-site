<template>
  <Head>
    <link rel="icon" type="image/png" sizes="32x32" href="tangerine_full.png" />
    <link
      href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
      rel="stylesheet"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  <div class="container" id="snow">
    <slot></slot>
  </div>
</template>

<style scoped>
#snow {
  background: none;
  background-image: url("~/assets/img/tangerine-border.png"),
    url("~/assets/img/tangerine-grid-md.png"),
    url("~/assets/img/tangerine-grid-sm.png");
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
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
</style>
