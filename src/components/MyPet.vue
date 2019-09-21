<template>
  <div>
    <!-- adopt -->
    <img v-on:click="adoptClicked()" src="../assets/images/dragon.png" width="450" height="450" />

    <!-- points -->
    <div>
      <label>Level {{ level }}</label>
      <span class="levelbar">
        <b-progress
          :value="points"
          :max="maxExp"
          show-value
          variant="warning"
          class="w-50 mb-3 level-bar"
        ></b-progress>
      </span>
    </div>

    <!-- Support Dropdown -->
    <div class="dropdown">
      <label>Choose a cause to support:</label>
      <v-select
        v-model="selectedCause"
        placeholder="Choose a cause"
        @input="addToSupportList(selectedCause)"
        :options="causeList"
        class="style-chooser"
      ></v-select>
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
  data() {
    return {
      // Level system
      points: 0,
      level: 1,

      // Dropdown
      selectedCause: "",
      causeList: ["Charity 1", "Charity 2", "Charity 3"],
      supportList: []
    };
  },
  methods: {
    addToSupportList: function(selectedCause) {
      // Prevent pushing a duplicate cause
      if (!this.supportList.includes(selectedCause)) {
        this.supportList.push(selectedCause);
      }
    },
    adoptClicked() {
      this.points++;
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

.v-select,
select {
  margin: auto;
}
</style>
