<template>
  <div>
    <h2>My Pet</h2>
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

    <!-- <ul> -->
      <!-- <li>Charity 0 (test)</li> -->
      <!-- <li v-for="support in supportList">{{ support }}</li> -->
    <!-- </ul> -->
  </div>
</template>

<script>
import vSelect from "vue-select";
export default {
  components: { vSelect },
  data() {
    return {
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";
</style>
