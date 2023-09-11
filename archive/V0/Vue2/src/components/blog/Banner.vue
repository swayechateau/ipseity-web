<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('site', ['siteWords'])
  },
  props: {
    value: {
      type: Object
    },
    blog: Boolean
  }
}
</script>
<template>
  <base-card dark v-if="value">
    <v-img
      class="grey lighten-2"
      height="400"
      width="100%"
      :src="value.hero"
    >
      <div class="bg-tint"></div>
      <v-layout
        fill-height
        align-center
        pa-3
      >
        <v-flex text-xs-center>
          <h1 class="display-3 font-weight-light text-shadow">
            {{ value.title }}
          </h1>
          <div class="subheading text-uppercase pl-2 mb-4 text-shadow">
            {{ value.sub_title }}
          </div>
          <v-btn
            v-if="blog"
            color="orange"
            depressed
            round
            :to="{name: 'blog-posts'}"
          >
            {{ siteWords.viewAllPosts }}
          </v-btn>
        </v-flex>
      </v-layout>
    </v-img>
  </base-card>
</template>

<style lang="stylus" scoped>
.text-shadow
  text-shadow 2px 2px #ff9800
.bg-tint {
  position: absolute;
  background-color: rgba(0,0,0,0.5);
  width:100%;
  height:100%;
  z-index: -1;
}
</style>
