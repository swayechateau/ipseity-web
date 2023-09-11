<script>
export default {
  props: ["project"],
  method: {
    even(n) {
      return n % 2 == 0 ? "Open Source" : "Closed Source";
    }
  }
};
</script>
<template>
  <v-card class="ma-2" hover>
    <v-img :src="project.hero" aspect-ratio="2.6">
      <v-layout justify-end>
        <v-chip v-if="project.open_source" label dark>Open Source</v-chip>
        <v-chip v-else label dark>Closed Source</v-chip>
        <v-spacer />
      </v-layout>
    </v-img>

    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ project.name }}</h3>
        <div>{{ project.description }}</div>
      </div>
    </v-card-title>

    <v-card-actions v-if="project.tags">
      <v-chip dark color="blue" v-for="tag in project.tags" :key="tag">{{ tag }}</v-chip>
    </v-card-actions>
  </v-card>
</template>