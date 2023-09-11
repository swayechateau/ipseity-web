<template>
<v-img height="calc(100vh - 10vh)" src="https://swayechateau.com/media/image/lost-city.jpg">
  <v-container
    fill-height
    style="background:rgba(0,0,0,.2)"
  >
    <v-layout align-center justify-center>
      <v-flex text-center>
        <h1 class="display-2 primary--text">Whoops, 404!</h1>
        <h3 class="white--text">Seems, You Are Lost Traveller!</h3>
        <v-btn
          :to="`/`"
          outlined
          color="primary"
        >
          Get me out of here!
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</v-img>
</template>