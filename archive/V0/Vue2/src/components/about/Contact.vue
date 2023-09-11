<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('site', ['settings'])
  }
}
</script>

<template>
  <section id="subscribe" tag="section">
    <base-card class="pa-3">
      <v-container grid-list-xl pa-0>
        <base-subheading class="text-xs-center ">Contact</base-subheading>
        <v-layout wrap>
          <v-flex xs12 md6>
            <v-list class="transparent">
              <v-list-tile>
                <v-list-tile-avatar color="primary">
                  <v-icon class="elevation-4" dark>mdi-email-outline</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title class="text-capitalize">Email</v-list-tile-title>
                <v-list-tile-sub-title>{{ settings.email }}</v-list-tile-sub-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-avatar color="primary">
                  <v-icon class="elevation-4" dark>mdi-map-marker</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title class="text-capitalize">Location</v-list-tile-title>
                <v-list-tile-sub-title>{{ settings.location }}</v-list-tile-sub-title>
              </v-list-tile>
            </v-list>
          </v-flex>
        </v-layout>
      </v-container>
    </base-card>
  </section>
</template>
