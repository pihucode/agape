<template>
  <div>
    <h2>About</h2>
    <p>
      Agape provides a platform and incentive for engaging
      users in their community.
      Agape introduces users to global problems and
      connects users to a cause.
    </p>

    <h2>Adopt a cause</h2>
    <p>Here are some causes you could contribute to!</p>
    <adopt-module></adopt-module>
    <!-- TODO: add adoptables here -->
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
    // addUser() {
    //   this.$http
    //     .request({
    //       url:
    //         "https://agape-api.herokuapp.com/new-user/" + this.currentUsername,
    //       method: "POST"
    //       // headers: { "Content-Type": "application/json" },
    //       // content: JSON.stringify({
    //       //   username: "username",
    //       //   password: "password"
    //       // })
    //     })
    //     .then(
    //       response => {
    //         var result = response.content.toJSON();
    //         console.log("POSTED SUCCESSFULLY");
    //         console.log(result);
    //       },
    //       error => {
    //         console.error(error);
    //       }
    //     );
    // },
    checkUser() {
      this.$http
        .get("https://agape-api.herokuapp.com/user/" + this.currentUsername)
        .then(function(data) {
          // add user if they are not in DB
          // if (!Object.keys(response.data).length) {
          console.log("get response succeeded");
          console.log(data);
          if (data.username == "not found") {
            console.log("add user");
          } else {
            console.log("else boop");
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
  background-color: white;
  width: 50em;
  border-radius: 12%;
}
</style>
