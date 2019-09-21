<template>
  <div>
    <img id="logo" src="../assets/logo.png" />
    <ul class="bubble-font">
      <li>
        <router-link to="/home" class="no-deco">Home</router-link>
      </li>
      <li>
        <router-link to="/featured" class="no-deco">Featured</router-link>
      </li>
      <li>
        <router-link to="/mypet" class="no-deco">My Pet</router-link>
      </li>
      <li>
        <router-link to="/merch" class="no-deco">Merch</router-link>
      </li>
      <li>
        <p onClick="signOut()" class="no-deco">Logout</p>
      </li>
    </ul>
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
.no-deco {
  text-decoration: none;
  color: #6eb8e0;
}

p:hover {
  cursor: pointer;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
  padding: 1em;
  margin: 0 auto;
  font-size: 2em;
  transition: 0.3s ease;
}

li:hover {
  font-size: 3em;
}
#logo {
  height: 10em;
}
</style>
