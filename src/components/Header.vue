<template>
  <div>
    <img id="logo" src="../assets/logo.png" />
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/featured">Featured</router-link>
      </li>
    </ul>
    <p class="slogan">Adopt a cause</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // title: "Agape"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline;
  margin-right: 42px;
  padding: 12px 24px;
  // background-color: sandybrown;
}

div {
}

#logo {
  height: 10em;
}
</style>
