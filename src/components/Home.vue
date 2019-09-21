<template>
  <div></div>
</template>

<script>
import AdoptModule from "./AdoptModule";

export default {
  components: {
    "adopt-module": AdoptModule
  },
  data() {
    return {
      // title: "Sign "
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1000;
  background-image: url(../assets/images/welcome_page.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; /* centers image */
}
</style>
