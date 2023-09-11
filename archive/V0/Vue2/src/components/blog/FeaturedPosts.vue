<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    full: Boolean
  },
  computed: {
    ...mapGetters('site', ['featuredPosts'])
  }
}
</script>

<template>
  <v-container pa-0 v-if="featuredPosts">
    <v-layout v-if="full" wrap>
      <v-flex xs12 sm6 md6 lg4 v-for="(article, i) in featuredPosts.slice(0, 3)"  :key="i">
        <v-card dark hover height="30vh" class="ma-2"
        :href="article.slug">
          <v-img :src="article.hero" height="100%">
            <v-layout
        align-end
        fill-height
        pa-3
        white--text
      >
      <div>
        <div class="title headline mb-0" v-text="article.name"></div>
        <div class="caption"> {{ [article.posted_at] | moment('MMMM Do YYYY') }} </div>
      </div>
      </v-layout>
          </v-img>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout
      v-else
      column
      pa-2
    >
      <v-card flat dark hover height="8vh" class="ma-2" v-for="(article, i) in featuredPosts.slice(0, 3)"
      :key="i" :href="article.slug">
        <v-layout>
          <v-flex xs5>
            <v-img :src="article.hero" height="8vh"/>
          </v-flex>
          <v-flex xs7>
            <v-card-title>
              <v-layout column>
              <div class="subheading" v-text="article.name"/>
              <div class="caption"> {{ [article.posted_at] | moment('MMMM Do YYYY') }}</div>
            </v-layout>
            </v-card-title>
          </v-flex>
        </v-layout>
        </v-card>
    </v-layout>
  </v-container>
</template>
