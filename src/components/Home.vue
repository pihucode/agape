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

export default {
  components: {
    "adopt-module": AdoptModule
  },
  data() {
    return {
      // title: "Sign "
    };
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
