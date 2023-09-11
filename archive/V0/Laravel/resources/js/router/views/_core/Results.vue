<script>
import { queryTitle } from '@/utils/page-meta'
export default {
  beforeCreate () {
    queryTitle(this.$route.query.q)
  },
  components: {
    Search: () => import('@/components/search/SearchBox'),
    Results: () => import('@/components/search/SearchResults')
  }
}
</script>

<template>
  <div>
    <v-layout wrap>
      <v-flex xs12>
        <search label="Search Site" />
      </v-flex>
    </v-layout>

    <results></results>
  </div>
</template>
