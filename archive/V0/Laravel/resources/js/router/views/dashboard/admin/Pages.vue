<script>
export default {
  components: {
    AddPage: () => import('@/components/admin/pages/AddPage'),
    ListPages: () => import('@/components/admin/pages/ListPages')
  },
  computed: {}
}
</script>

<template>
  <v-card>
    <v-card-title>
      <v-spacer></v-spacer>
      <AddPage />
    </v-card-title>
    <v-card-text>
      <ListPages />
    </v-card-text>
  </v-card>
</template>
