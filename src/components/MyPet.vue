<template>
  <div>
    <!-- adopt -->
    <img v-on:click="adoptClicked()" src="../assets/images/dragon.png" width="450" height="450" />

    <!-- points -->
    <div>
      <label class="text" id="level">Level {{ level }}</label>
      <br />
      <br />
      <br />
      <span class="levelbar">
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
      <br />
      <br />
    </div>

    <ul>
      <li v-for="support in supportList">{{ support }}</li>
    </ul>
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
        "St Jude Children's Research Hospital",
        "Direct Relief",
        "Habitat for Humanity International",
        "Boys & Girls Clubs of America",
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
      // Prevent pushing a duplicate cause
      if (!this.supportList.includes(selectedCause)) {
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
</style>
