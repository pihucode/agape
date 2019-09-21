<template>
  <div>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "component 2"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  background-color: lightseagreen;
}
</style>
