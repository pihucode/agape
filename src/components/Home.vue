<template>
  <div>
    <img id="about" src="../assets/images/about.png" />
  </div>
</template>

<script>
import AdoptModule from "./AdoptModule";
// import * as auth2 from "https://apis.google.com/js/platform.js";

export default {
  components: {
    "adopt-module": AdoptModule
  },
  created() {
    console.log("created() function called");
    // get current logged in user's email and set as currentUsername
    this.currentUsername = localStorage.getItem("username");
    console.log("username: " + this.currentUsername);

    this.checkUser();
  },
  data() {
    return {
      currentUsername: ""
    };
  },
  methods: {
    addUser() {
      this.$http
        .post(
          "https://agape-api.herokuapp.com/new-user/" + this.currentUsername,
          {
            // title: this.blog.title,
            // body: this.blog.content,
            // userId: 1
          }
        )
        .then(function(data) {
          console.log("POSTED SUCCESSFULLY");
          console.log(data);
        });
    },
    checkUser() {
      this.$http
        .get(
          "https://cors-anywhere.herokuapp.com/https://agape-api.herokuapp.com/user/" +
            this.currentUsername
        )
        .then(function(data) {
          // add user if they are not in DB
          // if (!Object.keys(response.data).length) {
          console.log("get response succeeded");
          console.log(data);
          if (data.body.username == "not found") {
            this.addUser();
            console.log("add user");
          } else {
            console.log("else boop");
            console.log(data.body.username);
          }
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin: auto;
  width: 50em;
  border-radius: 12%;
}

#about {
  width: 100%;
}
</style>
