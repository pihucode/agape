<template>
  <div>
    <h2>My Adopt</h2>
    <!-- adopt -->
    <img v-on:click="adoptClicked()" src="../assets/images/dragon.png" width="450" height="450" />

    <!-- points -->
    <div>
      <label>Level {{ level }}</label>
      <p>{{ points }}</p>
      <span class="levelbar">
        <b-progress :value="points" :max="maxExp" show-value variant="warning" class="w-50 mb-3"></b-progress>
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
      <li>Charity 0 (test)</li>
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
.levelbar {
  padding-left: 90px;
}

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
