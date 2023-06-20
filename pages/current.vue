<template>
  <Page>
    <h1>Things I'm up to or like</h1>

    <div class="list">
      <div class="item">
        <p>We've been collecting all of my families 
        <a href="https://healey-recipes.vercel.app/">favourite recipes</a> in
        a short, easy to read format, for easy cooking.</p>
      </div>
      <div class="item">
        <p>This
        <a href="https://healeycodes.com/">tech blog</a> always has some winners. </p>
      </div>
      <div class="item">
        <p>I built this page for sharing
        <a href="https://healey.family/"> pictures of our kids</a>.</p>
      </div>
    </div>
  </Page>
</template>

<style scoped>
.list {
  text-align: left;
}

.item {
    padding: 8px;
}

.item a {
color: #a42626;
}
</style>

<script>
import Page from "@/components/Nav.vue";

export default {
  components: {
    Page
  }
};
</script>
