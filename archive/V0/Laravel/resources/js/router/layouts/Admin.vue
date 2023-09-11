<script>
import { mapState, mapGetters } from 'vuex'
export default {
  components: {
    CoreView: () => import('@/components/_core/View')
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters('site', ['siteWords'])
  },
  data: () => ({
    drawerRight: true
  })
}
</script>
<template>
  <v-app id="inspire">
    <v-navigation-drawer fixed v-model="drawerRight" clipped app>
      <v-list>
        <v-list-tile to="/admin">
          <v-list-tile-content>
            <v-list-tile-title> {{ siteWords.dashboard }} </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/admin/pages">
          <v-list-tile-content>
            <v-list-tile-title>{{ siteWords.pages }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/admin/posts">
          <v-list-tile-content>
            <v-list-tile-title> {{ siteWords.posts }} </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/admin/projects">
          <v-list-tile-content>
            <v-list-tile-title> {{ siteWords.projects }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/admin/users">
          <v-list-tile-content>
            <v-list-tile-title>{{ siteWords.users }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/admin/files">
          <v-list-tile-content>
            <v-list-tile-title> {{ siteWords.files }} </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/admin/translations">
          <v-list-tile-content>
            <v-list-tile-title>{{ siteWords.translations }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/admin/settings">
          <v-list-tile-content>
            <v-list-tile-title>{{siteWords.settings}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue-grey" dark fixed app clipped-left>
      <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
      <v-toolbar-title>{{ siteWords.adminPage }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{ user.name }}</v-toolbar-title>
    </v-toolbar>

    <core-view />
  </v-app>
</template>
