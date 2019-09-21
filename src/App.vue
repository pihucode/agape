<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "app",
  components: {
    "app-header": Header
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
  height: 100vh;

  // background-color: darkgrey;
  background-image: url(assets/images/welcome_page.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; /* centers image */
}
</style>
