<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('site', ['posts', 'siteWords'])
  }
}
</script>

<template>
  <div class="pb-4">
    <base-subheading>{{ siteWords.recentPosts }}</base-subheading>
    <v-list two-line dense>
      <v-list-tile v-for="(article, i) in posts.slice(0, 4)" :key="i" avatar :to="`${article.slug}`">
        <v-list-tile-avatar tile>
          <img :src="article.hero" />
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="article.title"></v-list-tile-title>
          <v-list-tile-sub-title >
            {{ [article.posted_at] | moment('MMMM Do YYYY') }}
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>
