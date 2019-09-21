<template>
  <div>
    <p id="blurb">100% of the proceeds towards charities of your choice</p>
    <!-- TODO: should take in data passed from Home.vue -->
    <div class="flex-container">
      <div class="row">
        <img src="../assets/images/apagetee.png" />
        <img src="../assets/images/tote.png" />
        <img src="../assets/images/hoodie.png" />
      </div>
      <div class="row">
        <img src="../assets/images/sticker1.png" />
        <img src="../assets/images/agapesticker.png" />
        <img src="../assets/images/egg-stickr.png" />
      </div>
    </div>
  </div>
</template>

  <script>
</script>

<style>
.row img {
  width: 30%;
}

.flex-container {
  height: 100%;
  padding: 0;
  margin: 0;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.row {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  margin: 3em;
}

#blurb {
  color: #80b7dc;
  font-size: 1.5em;
  font-family: "Avenir";
}
</style>
