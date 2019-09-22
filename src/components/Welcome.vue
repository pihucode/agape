<template>
  <div class="bg">
    <div class="g-signin2" data-onsuccess="onSignIn"></div>
    <!-- <button v-on:click="testIndexMethod()">TEST</button> -->
  </div>
</template>

<script>
export default {
  created() {
    console.log("created!");
    testIndexMethod();
  },
  data() {
    return {
      //data: value;
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.bg {
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
