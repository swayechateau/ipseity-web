<template>
  <v-img height="calc(100vh - 10vh)" src="media/image/smug.jpg">
    <div class="bg-tint"></div>
    <audio src="/media/music/My_Shot.mp3" autoplay loop></audio>
    <v-container fill-height>
      <v-layout align-center justify-center>
        <v-flex text-xs-center>
          <h1 class="display-2 primary--text">
            First Timer aye ;)
          </h1>
          <div class="text-xs-center">
            <v-progress-circular
              :size="100"
              color="primary"
              indeterminate
            ></v-progress-circular>
          </div>
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
