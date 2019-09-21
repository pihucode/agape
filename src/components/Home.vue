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
        .request({
          url:
            "https://agape-api.herokuapp.com/new-user/" + this.currentUsername,
          method: "POST"
          // headers: { "Content-Type": "application/json" },
          // content: JSON.stringify({
          //   username: "username",
          //   password: "password"
          // })
        })
        .then(
          response => {
            var result = response.content.toJSON();
            console.log("POSTED SUCCESSFULLY");
            console.log(result);
          },
          error => {
            console.error(error);
          }
        );
    },
    checkUser() {
      // this.$http
      //   .get("https://agape-api.herokuapp.com/user/" + this.currentUsername, {
      //     headers: {
      //       // "Access-Control-Allow-Origin": "*",
      //       "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE",
      //       "Access-Control-Allow-Headers":
      //         "Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type",
      //       "Content-Type": "application/json",
      //       Accept: "application/json"
      //     }
      //   })
      //   .then(
      //     function(response) {
      //       console.log("success");
      //     },
      //     function(response) {
      //       // Error
      //       console.log("error");
      //     }
      //   );
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
