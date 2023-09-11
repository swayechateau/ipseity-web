<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['social'])
  },
  data: () => ({
    iLink: 'https://www.instagram.com/p/'
  })
}
</script>

<template>
  <v-container
    pa-0
    grid-list-md
  >
    <base-subheading>On Instagram</base-subheading>
    <v-layout wrap>
      <v-flex
        v-for="(post, i) in social.instagram.edge_owner_to_timeline_media.edges.slice(0, 6)"
        :key="i"
        xs4
      >
        <base-card
          tag="a"
          target="_blank"
          :href="iLink+post.node.shortcode"
          height="110"
          color="grey lighten-2"
        >
          <v-img
            v-if="post.node.display_url"
            height="100%"
            :src="post.node.display_url"
          />
        </base-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
