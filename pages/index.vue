<template>
  <Page>
    <h1>Welcome to my site.</h1>
    <img src="/face.png" alt="rough cutout of a floating face" />
    <p>
      This is just a little landing page, nothing too interesting. I'm a
      fullstack developer based in Brighton. I studied English and Creative
      Writing at Birkbeck, University of London and caught the coding bug after
      graduating.
    </p>
  </Page>
</template>

<style scoped>
img {
  width: 36%;
}

@media only screen and (min-width: 600px) {
  img {
    width: 25%;
  }
}
</style>

<script>
import Page from "@/components/Nav.vue";

export default {
  components: {
    Page
  },
  data() {},
  methods: {}
};
</script>
