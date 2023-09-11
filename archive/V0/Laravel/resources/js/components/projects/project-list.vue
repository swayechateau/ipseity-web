<script>
export default {
    props: ['projects'],
    components: {
      ProjectCard: () => import("@/components/projects/project-card")
    }
}
</script>
<template>
  <v-layout wrap>
    <v-flex xs12 sm6 md4 lg2 v-for="p in projects">
      <project-card :project="p" :key="p"></project-card>
    </v-flex>
  </v-layout>
</template>