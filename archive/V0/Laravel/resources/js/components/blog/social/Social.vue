<template>
  <v-container
    id="social"
    tag="section"
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex
        xs12
        md4
      >
        <twitter />
      </v-flex>
      <v-flex
        xs12
        md4
      >
        <instagram />
      </v-flex>
      <v-flex
        xs12
        md4
      >
        <youtube/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {
    Instagram: () => import('./Instagram'),
    Twitter: () => import('./Twitter'),
    Youtube: () => import('./Youtube')
  }
}
</script>
