<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('site', ['siteWords', 'results', 'searching']),
    resultPages () {
      return this.results ? Math.ceil(this.results.length / 5) : 1
    },
    paginatedResults () {
      const start = (this.page - 1) * 5
      const stop = this.page * 5

      return this.results ? this.results.slice(start, stop) : null
    }
  },
  methods: {
    setType (code) {
      switch (code) {
        case 1:
          return this.siteWords.page
        case 2:
          return this.siteWords.post
        case 3:
          return this.siteWords.project
      }
    }
  },
  data: () => ({
    page: 1
  })
}
</script>

<template>

    <v-container>
      <v-layout>
        <v-flex xs12>
          <v-card v-if="this.$route.query.q">

            <v-card-title>
              <span class="primary--text">
                <strong class="grey--text text-capitalize">{{ siteWords.resultsFor }}:</strong>
                {{ this.$route.query.q}}
              </span>
            </v-card-title>
            <v-progress-linear v-if="searching" indeterminate></v-progress-linear>
            <v-list two-line dense v-if="paginatedResults">
              <template v-for="item in paginatedResults">
                <v-list-tile :key="item.name" :to="item.slug" class="search-list pa-2">
                  <v-list-tile-action>
                    <v-img height="100%" width="15vh" :src="item.hero" />
                  </v-list-tile-action>
                  <v-list-tile-content class="pa-2">
                    <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ item.description }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-chip>{{ setType (item.type) }}</v-chip>
                  </v-list-tile-action>
                </v-list-tile>
                <v-divider :key="item.index"></v-divider>
              </template>
            </v-list>
            <v-card-text v-if="resultPages === null || resultPages.length == 0">
              <h3 class="text-capitalize">{{ siteWords.noResultsFound }}</h3>
            </v-card-text>
            <v-card-actions v-if="resultPages !== null || resultPages.length !== 0">
              <v-layout align-center>
                <v-flex xs3>
                  <base-btn
                    v-if="page !== 1"
                    class="ml-0"
                    title="Previous page"
                    square
                    @click="page--"
                  >
                    <v-icon>mdi-chevron-left</v-icon>
                  </base-btn>
                </v-flex>

                <v-flex xs6 text-xs-center subheading>{{ siteWords.page }} {{ page }} {{ siteWords.of }} {{ resultPages }}</v-flex>

                <v-flex xs3 text-xs-right>
                  <base-btn
                    v-if="resultPages > 1 && page < resultPages"
                    class="mr-0"
                    title="Next page"
                    square
                    @click="page++"
                  >
                    <v-icon>mdi-chevron-right</v-icon>
                  </base-btn>
                </v-flex>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>
<style lang="stylus" scoped>
 .search-list a {
    padding: 0!important;
 }
</style>
