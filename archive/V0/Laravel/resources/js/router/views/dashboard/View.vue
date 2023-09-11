<script>
import { mapGetters, mapState } from 'vuex'
export default {
  components: {
    // Settings: () => import('@/components/admin/Settings'),
    // SiteWords: () => import('@/components/admin/SiteWords')
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters('site', ['lang'])
  },
  data: () => ({
    tab: null,
    items: ['Games', 'Videos', 'Applications'],
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  })
}
</script>

<template>
  <div>
    <v-toolbar color="cyan" dark tabs>
      <h2>Welcome {{ user.name }}</h2>
      <v-spacer />
      <v-btn icon v-if="user.wizard" to="/admin">
        <v-icon>fas fa-cogs</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-tabs v-model="tab" color="cyan" grow>
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
