<template>
  <div>
    <h2>Sign In</h2>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import firebase from "firebase";
import firebaseui from "firebaseui";
import { config } from "../firebaseConfig";
export default {
  mounted() {
    var uiConfig = {
      signInSuccessUrl: "/featured",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  },
  data() {
    return {
      // title: "component 2"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* <link
  type="text/css"
  rel="stylesheet"
  href="node_modules/firebaseui/dist/firebaseui.css"
  /
  >  */

div {
  background-color: lightseagreen;
}
</style>
