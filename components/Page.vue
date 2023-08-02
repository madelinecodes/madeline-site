<template>
  <Default>
    <Nav></Nav>
    <div class="content">
      <slot></slot>
    </div>
  </Default>
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
@media only screen and (min-width: 600px) {
  .content {
    font-size: 21px;
  }
}
</style>

<script>
import Nav from "@/components/Nav.vue";
import css from "assets/css/app.css";
import Default from "@/layouts/Default.vue";

</script>
