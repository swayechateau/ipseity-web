
<script>
// Utilities
import {
  mapGetters,
  mapMutations
} from 'vuex'

export default {
  name: 'CoreDrawer',

  computed: {
    ...mapGetters('site', ['navRoutes']),
    drawer: {
      get () {
        return this.$store.state.app.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    }
  },

  methods: {
    ...mapMutations('app', ['setDrawer']),
    onClick (e, item) {
      e.stopPropagation()

      if (item.to === '/') {
        this.$vuetify.goTo(0)
        this.setDrawer(false)
        return
      }

      if (item.to || !item.href) return

      this.$vuetify.goTo(item.href)
      this.setDrawer(false)
    }
  }
}
</script>

<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    dark
    temporary
  >
    <v-list>
      <v-list-tile
        v-for="(link, i) in navRoutes"
        :key="i"
        :id="link.index"
        :to="link.to"
        @click="onClick($event, link)"
      >
        <v-list-tile-title :key="link.index" v-text="link.name" />
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>
