<script>
export default {
  page: {
    title: 'Loading page...',
    meta: [{ name: 'description', content: 'Loading page...' }]
  }
}
</script>

<template>
  <Transition appear>
    <v-img
      height="calc(100vh - 10vh)"
      src="https://swayechateau.com/media/image/lost-city.jpg"
    >
      <v-container fill-height style="background: rgba(0, 0, 0, 0.2)">
        <v-layout align-center justify-center>
          <v-flex text-center>
            <!--loading icon-->
            <v-progress-circular
              :size="70"
              :width="7"
              color="purple"
              indeterminate
            ></v-progress-circular>
            <h3 class="white--text">
              This page is taking the long way to get here! ¬_¬
            </h3>
            <h3 class="white--text">Said it was here yesterday! ¬_¬</h3>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
    <audio controls>
      <source
        src="https://swayechateau.com/media/music/My_Shot.mp3"
        type="audio/mpeg"
      />
    </audio>
  </Transition>
</template>
