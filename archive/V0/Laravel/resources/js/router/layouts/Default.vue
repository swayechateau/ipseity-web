<script>
import { mapState } from 'vuex'
export default {
  components: {
    CoreDrawer: () => import('@/components/_core/Drawer'),
    CoreFooter: () => import('@/components/_core/Footer'),
    CoreToolbar: () => import('@/components/_core/Toolbar'),
    CoreView: () => import('@/components/_core/View'),
    PreLoader: () => import('@/components/_core/PreLoader')
  },
  computed: {
    ...mapState('app', ['loading'])
  }
}
</script>
<template>
  <v-app>
    <pre-loader v-if="loading" />
    <template v-else>
      <div id="nav">
        <core-toolbar />
        <core-drawer />
      </div>
      <core-view />
      <core-footer />
    </template>
  </v-app>
</template>
