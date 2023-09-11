<script>
// Utilities
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('site', ['navRoutes', 'supportedLangs', 'lang'])
  },
  methods: {
    ...mapActions('site', ['changeLang']),
    ...mapMutations('app', ['toggleDrawer']),

    updateLang (l) {
      this.changeLang(l)
      this.$moment.locale(l)
      console.log(this.$moment.locale())
    },
    onClick (e, item) {
      e.stopPropagation()

      if (item.to || !item.href) return

      this.$vuetify.goTo(item.href)
    }
  }
}
</script>

<template>
  <v-toolbar
    app
    flat
    dark
    style="background: rgb(183,61,21);background: linear-gradient(90deg, rgba(183,61,21,1) 20%, rgba(147,17,194,1) 100%);"
  >
    <v-img
      src="https://swayechateau.com/media/image/swaye-logo.png"
      class="mr-5"
      contain
      height="35"
      width="35"
      max-width="35"
      @click="$vuetify.goTo(0)"
    />

    <v-spacer />

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        v-for="link in navRoutes"
        :key="link.index"
        :id="link.index"
        :to="link.to"
        class="ml-0 hidden-sm-and-down"
        flat
      >
        {{ link.name }}
      </v-btn>
    </v-toolbar-items>

    <div class="text-xs-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn flat dark v-on="on">{{ ` ${lang}` }}</v-btn>
        </template>
        <v-list>
          <v-list-tile v-for="l in supportedLangs" :key="l" @click="updateLang(l)">
            <v-list-tile-title class="text-capitalize">
              <flag v-if="l == 'en'" iso="gb" />
              <flag v-else-if="l == 'fr'" iso="fr" />
              <flag v-if="l == 'ja'" iso="jp" />
              <span class="flag-icon-gb" />
              {{ l }}
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </div>
    <v-toolbar-side-icon class="hidden-md-and-up" @click="toggleDrawer" />
    <template></template>
  </v-toolbar>
</template>
