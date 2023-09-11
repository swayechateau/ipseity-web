<script>
import { mapState } from 'vuex'
export default {
  components: {
    AddUser: () => import('@/components/admin/pages/AddUser'),
    ListUsers: () => import('@/components/admin/pages/ListUsers')
  },
  computed: {
    ...mapState(['lang'])
  }
}
</script>

<template>
  <v-card flat>
    <v-card-title>
      <v-spacer />
      <add-user />
    </v-card-title>
    <v-card-text>
      <list-users />
    </v-card-text>
  </v-card>
</template>
