<template>
  <div>
    <div class="g-signin2" data-onsuccess="onSignIn"></div>
    <button class="hvr-grow" id="let_go">
      <a href="/home" id="play">play</a>
    </button>
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
.hvr-grow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
#let_go {
  font-family: "Billo";
  font-size: 6em;
  padding: 0.1em;
}
#play {
  color: white;
}
button {
  background-color: #4ea2cf;
  width: 4em;
  border-radius: 0.4em;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  right: 0;
  left: 0;
  bottom: 10%;
}
#let_go:hover {
  cursor: pointer;
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
