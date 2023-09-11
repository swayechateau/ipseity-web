<script>
// Utilities
import { mapGetters } from 'vuex'

export default {
  name: 'Feed',
  components: {
    FeedCard: () => import('@/components/blog/FeedCard')
  },
  data: () => ({
    layout: [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3],
    page: 1
  }),
  computed: {
    ...mapGetters('site', ['posts', 'siteWords', 'postPages', 'paginatedArticles'])
  },

  watch: {
    page () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<template>
  <v-container
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex xs12>
        <slot />
      </v-flex>
      <template v-for="(article, i) in paginatedArticles">
        <feed-card
          :key="article.title"
          :size="layout[i]"
          :value="article"
        />
      </template>
    </v-layout>

    <v-layout align-center>
      <v-flex xs3>
        <base-btn
          v-if="page !== 1"
          class="ml-0"
          :title="siteWords.previousPage"
          square
          @click="page--"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </base-btn>
      </v-flex>

      <v-flex
        xs6
        text-xs-center
        subheading
      >
        {{ siteWords.page }} {{ page }} {{ siteWords.of }} {{ postPages }}
      </v-flex>

      <v-flex
        xs3
        text-xs-right
      >
        <base-btn
          v-if="postPages > 1 && page < postPages"
          class="mr-0"
          :title="siteWords.nextPage"
          square
          @click="page++"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </base-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
