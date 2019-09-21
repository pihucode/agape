<template>
  <div>
    <img id="about" src="../assets/images/about.png" />
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
  width: 50em;
  border-radius: 12%;
}

#about {
  width: 100%;
}
</style>
