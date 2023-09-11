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
    <base-card color="rgba(203, 170, 92, 0.51)" class="pa-3">
      <v-container grid-list-xl pa-0>
        <v-layout wrap>

          <v-flex xs12 md5>
            <base-subheading class="mb-3">Subscribe</base-subheading>
            <p>Subscribe for updates on new posts and projects.</p>

            <v-layout wrap pa-2>
              <v-text-field
                solo
                hide-details
                placeholder="Enter Email Address..."
                style="max-width: 400px;"
              />
              <v-btn
                :block="$vuetify.breakpoint.xsOnly"
                class="ma-0"
                color="success"
                style="height: 48px"
              >Subscribe</v-btn>
            </v-layout>
          </v-flex>
          <v-flex xs12 md12 offset-md1>
            <base-subheading class="text-xs-center ">Contact</base-subheading>
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
