<template>
  <div class="pb-4" v-if="tags">
    <base-subheading>Tags</base-subheading>
    <v-chip
      v-for="tag in tags"
      :key="tag"
      tag
      label
      small
      color="secondary"
      text-color="white"
    >
      {{ tag }}
    </v-chip>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array
    }
  }
}
</script>
