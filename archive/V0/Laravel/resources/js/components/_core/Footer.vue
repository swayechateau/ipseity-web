<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('site', ['socialLinks', 'siteWords'])
  }
}
</script>
<template>
  <v-footer
    class="py-4"
    dark
    height="auto"
  >
    <v-container mx-auto>
      <v-layout wrap>
        <v-flex xs9>
          <base-btn
            v-for="(item, i) in socialLinks"
            :key="i"
            :href="item.href"
            class="ml-0 mr-3"
            color="primary"
            square
            target="_blank"
          >
            <v-icon v-text="item.icon" />
          </base-btn>
        </v-flex>
        <v-spacer />
        <base-btn
          class="mr-0"
          square
          :title="siteWords.goToTop"
          @click="$vuetify.goTo(0)"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </base-btn>
      </v-layout>
    </v-container>
  </v-footer>
</template>
