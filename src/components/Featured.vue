<template>
  <div>
    <img id="bulletin" src="../assets/bulletin.png" />
    <div class="column">
      <a href="https://www.salvationarmyusa.org/usn/">
        <img id="salvation" class="postit" src="../assets/salvation.png" />
      </a>
      <a href="https://www.stjude.org/">
        <img class="postit" src="../assets/stjudes.png" />
      </a>
      <a href="https://www.habitat.org/">
        <img class="postit" src="../assets/habitat.png" />
      </a>
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
.column {
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  align-items: center;
}

#bulletin {
  width: 50%;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  margin-bottom: 10em;
}

.postit {
  transition: 0.3s ease;
  width: 40%;
}

.postit:hover {
  transform: scale(1.2);
}
</style>
