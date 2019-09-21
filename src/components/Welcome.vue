<template>
  <div>
    <div class="g-signin2" data-onsuccess="onSignIn"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      // title: "Sign "
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  z-index: 10000;
}

div {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1000;
  background-image: url(../assets/images/welcome_page.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; /* centers image */
}
</style>
