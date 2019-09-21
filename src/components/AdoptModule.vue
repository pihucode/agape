<template>
  <!-- TODO: should take in data passed from Home.vue -->
  <div>
    <img
      class="adoptable_avatar"
      src="../assets/images/adopt_placeholder.jpg"
      alt="red panda"
      width="250"
      height="250"
    />
    <div class="cause_descr">
      <h3>Deforestation</h3>
      <p>
        Deforestation not only affects the climate by increasing the
        atmospheric level of carbon dioxide but also affects the environment
        by inhibiting water recycling, triggering severe flooding, aquifer
        depletion, soil degradation and the extinction of plant and animal
        species.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // title: "component 2"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  background-color: yellowgreen;
}
</style>
