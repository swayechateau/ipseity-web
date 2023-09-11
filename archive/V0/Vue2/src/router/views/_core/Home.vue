<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('site', ['pages'])
  }
}
</script>
<template>
  <v-parallax style="height:79vh;" :src="pages['home'].hero">
    <v-layout pa-2 align-center column fill-height justify-center>
      <v-spacer />
      <h1 class="display-2 font-weight-thin mb-3">{{ pages['home'].title }}</h1>
      <v-spacer />
    </v-layout>
  </v-parallax>
</template>
