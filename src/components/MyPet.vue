<template>
  <div>
    <!-- adopt -->
    <img id="pet" v-on:click="adoptClicked()" src="../assets/images/dragon.png" />

    <!-- points -->
    <div>
      <label class="text" id="level">Level {{ level }}</label>
      <span class="levelbar">
        <br />
        <br />
        <br />
        <b-progress
          :value="displayPoints"
          :max="maxExp"
          show-value
          variant="warning"
          class="w-50 mb-3 level-bar"
        ></b-progress>
      </span>
    </div>

    <!-- Support Dropdown -->
    <div class="dropdown">
      <label class="text">Choose a cause to support:</label>
      <v-select
        v-model="selectedCause"
        placeholder="Choose a cause"
        @input="addToSupportList(selectedCause)"
        :options="causeList"
        class="style-chooser"
      ></v-select>
      <!-- <br />
      <br />-->
    </div>

<<<<<<< HEAD
    <div class="charity-list">
      <img
        class="charity-post"
        v-for="support in supportList"
        :src="require(`../assets/${support}.png`)"
      />
=======
    <div>
      <li v-for="support in supportList">{{support}}</li>
>>>>>>> 5a3fb129a96e1bac4f581708fafcf4832fd6b256
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";
export default {
  components: { vSelect },
  created() {
    this.currentUsername = localStorage.getItem("username");
    this.getUser();
  },
  data() {
    return {
      // User
      currentUsername: "",

      // Pet
      petImage: "",

      // Level system
      points: 0,
      displayPoints: 0,
      maxExp: 10,
      level: 1,

      // Dropdown
      selectedCause: "",
      causeList: [
        "United Way Worldwide",
        "Feeding America",
        "Americares Foundation",
        "Task Force for Global Health",
        "Salvation Army",
        "St Jude",
        "Direct Relief",
        "Habitat for Humanity",
        "Boys & Girls Clubs",
        "YMCA of the USA"
      ],
      supportList: []
    };
  },
  methods: {
    getUser() {
      this.$http
        .get(
          "https://cors-anywhere.herokuapp.com/https://agape-api.herokuapp.com/user/" +
            this.currentUsername
        )
        .then(function(data) {
          console.log("get response succeeded");
          if (data.body.username != "not found") {
            console.log(data);
            this.supportList = data.body.charities;
            this.points = data.body.clicks;
            this.displayPoints = data.body.clicks % this.maxExp;
          } else {
            console.log("else boop");
          }
        });
    },
    logResult() {
      this.$http
        .get(
          "https://cors-anywhere.herokuapp.com/https://agape-api.herokuapp.com/user/" +
            this.currentUsername
        )
        .then(function(data) {
          console.log("get response succeeded");
          if (data.body.username != "not found") {
            console.log(data);
            console.log("get clicks: " + data.body.clicks);
          } else {
            console.log("else boop");
          }
        });
    },
    addToSupportList: function(selectedCause) {
      console.log("addToSupportList called! ");
      // Prevent pushing a duplicate cause
      if (!this.supportList.includes(selectedCause)) {
        console.log("support list");
        this.supportList.push(selectedCause);
      }
    },
    updatePointsDB() {
      this.$http
        .post(
          "https://cors-anywhere.herokuapp.com/https://agape-api.herokuapp.com/increment/" +
            this.currentUsername +
            "/" +
            this.points
        )
        .then(function(data) {
          console.log("POSTED SUCCESSFULLY");
          this.logResult();
          console.log("points: " + this.points);
          console.log(data);
        });
    },
    adoptClicked() {
      this.points++;
      this.displayPoints++;
      if (this.displayPoints == this.maxExp) {
        //TODO
        this.displayPoints = 0;
        this.level++;
      }
      this.updatePointsDB();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.level-bar {
  margin: auto;
}

// b-progress
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";

@import "vue-select/src/scss/vue-select.scss";
.v-select,
select {
  border-radius: 6px;
  background-color: white;
  font-size: 16px;
  width: 600px;
  // color: $p-text-color;
}

.dropdown {
  margin-bottom: 10em;
}

.v-select,
select {
  margin: auto;
}

.text {
  color: #4a728c;
  font-size: 1.5em;
  font-family: "Avenir";
}

#level {
  font-size: 1em;
}

.charity-post {
  width: 420px;
}

#pet {
  width: 30%;
}
</style>
