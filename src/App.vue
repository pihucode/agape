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

$(document).ready(function() {
  $("html")
    .hide(0)
    .delay(500)
    .fadeIn(1000);
});
</script>

<style lang="scss">
@font-face {
  font-family: "Billo";
  src: url("assets/billo.ttf");
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
  height: 100vh;

  background-image: url(assets/images/background_image.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; /* centers image */
}

a {
  text-decoration: none;
}

.bubble-font {
  font-family: "Billo";
}
</style>
