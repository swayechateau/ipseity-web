<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      query: this.$route.query.q
    }
  },
  props: {
    label: {
      type: String
    }
  },
  methods: {
    ...mapActions('site', ['searchQuery']),
    submit () {
      this.searchQuery(this.query)
      this.$router.push({ name: 'search', query: { q: this.query } })
    }
  }
}
</script>
<template>
  <div>
    <v-text-field solo :label="label" v-model="query" append-icon="mdi-magnify" @keyup.enter="submit"/>
  </div>
</template>
