<template>
  <Head>
    <link
      href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
      rel="stylesheet"
    />
  </Head>
  <div class="nav">
    <h1>
      Mads (Madeline) Healey
    </h1>
    <div class="links">
      <a href="https://www.w3schools.com">About</a>
      <a href="https://www.w3schools.com">Github</a>
      <a href="https://www.w3schools.com">Current</a>
      <a href="https://www.w3schools.com">Contact</a>
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
}

.links {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.links a {
  text-decoration: none;
  color: black;
  font-size: 20px;
}

@media only screen and (min-width: 600px) {
  .links {
  display: flex;
  justify-content: space-between;
  width: 25%;
}
}
</style>
