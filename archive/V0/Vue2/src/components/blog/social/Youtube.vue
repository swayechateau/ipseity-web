<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['social'])
  },
  data: () => ({
    yLink: 'https://www.youtube.com/watch?v='
  })
}
</script>

<template>
  <v-container
    pa-0
    grid-list-md
  >
    <base-subheading>On Youtube</base-subheading>
    <v-layout wrap>
      <v-flex
        v-for="(post, i) in social.youtube.items"
        :key="i"
        xs4
      >
        <base-card
          tag="a"
          :alt="post.snippet.title"
          target="_blank"
          :title="post.snippet.title"
          :href="yLink+post.snippet.resourceId.videoId"
          height="110"
          color="grey lighten-2"
        >
          <v-img
            v-if="post.snippet.thumbnails"
            height="100%"
            :src="post.snippet.thumbnails.high.url"
          />
        </base-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
