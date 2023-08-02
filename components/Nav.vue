<template>
  <Head>
    <link
      href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
      rel="stylesheet"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </Head>
  <div class="nav">
    <nuxt-link class="title" to="/">
      <h1>
        Mads (Madeline) Healey
      </h1>
    </nuxt-link>
    <div class="links">
      <nuxt-link to="/about">About</nuxt-link>
      <a href="https://github.com/madelinecodes">Github</a>
      <nuxt-link to="/current">Current</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px;
  font-family: "Righteous";
  flex-wrap: wrap;
  color: white;
}

.links {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
}

.links a,
.title {
  text-decoration: none;
  color: #f5ece5;
  font-size: 20px;
}

@media only screen and (min-width: 600px) {
  .links {
    display: flex;
    justify-content: space-between;
    min-width: 294px;
    max-width: 25%;
  }
}
</style>
