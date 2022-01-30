<template>
  <div class="image_area">
    <div class="left_blocks">
      <h1>Enjoy Your<br>Morning Coffee.
      </h1>
      <p>The coofee is brewed by fist roasting the green coffee beans over hot coals in brazier. given to Opportunity</p>
      <button>Test Coffee</button>
    </div>
    <div class="right_block">
      <div class="video_button"><a href="#"><div class="play"></div></a></div>
    </div>
  </div>
</template>

<style scoped>
.image_area {
  height: 30vw;
  background-image: url(../assets/banner.png);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
h1 {
  color: white;
}
.play {
  width: 93px;
  height: 109px;
  background-image: url(../assets/Play.png);
}
.play:hover {
  background-image: url(../assets/Play_hover.png);
}
</style>
