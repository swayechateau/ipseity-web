<template>
  <v-img height="calc(100vh - 10vh)" src="media/image/facepalm.jfif">
    <div class="bg-tint"></div>
    <audio src="/media/music/My_Shot.mp3" autoplay loop></audio>
    <v-container fill-height>
      <v-layout align-center justify-center>
        <v-flex text-xs-center>
          <h1 class="display-2 primary--text">Seems, we have gremlins again!</h1>
          <h2
            class="white--text"
          >For the love of... Seriously!!! Why do they always play hamiliton?!?!</h2>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
</template>
<style lang="stylus" scoped>
.bg-tint {
  background: rgba(0, 0, 0, 0.4);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
}
</style>
