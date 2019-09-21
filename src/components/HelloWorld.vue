<template>
  <div>
    <h1>{{title}}</h1>
    <p class="slogan">Adopt a cause</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      title: "Agape title"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
