
<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    banner: Boolean
  },
  computed: {
    ...mapGetters('site', ['categories', 'siteWords'])
  }
}
</script>

<template>
  <v-img
    v-if="banner"
    class="grey lighten-2"
    height="400"
    width="100%"
    src="https://www.miuc.org/wp-content/uploads/2018/02/How-can-colours-help-you-in-your-everyday-life.jpg"
  >
    <v-layout fill-height align-center pa-3>
      <v-flex text-xs-center>
        <h1 class="display-3 font-weight-light text-shadow text-white">{{ siteWords.categories }}</h1>
        <div class="subheading text-uppercase pl-2 mb-4 text-shadow">
          <v-chip
            v-for="(category, i) in categories"
            :key="i"
            tag
            label
            small
            color="orange"
            text-color="white"
          >{{ category.text }}</v-chip>
        </div>
      </v-flex>
    </v-layout>
  </v-img>
  <v-container pa-0 v-else>
    <base-subheading>{{ siteWords.categories }}</base-subheading>
    <v-chip
      v-for="(category, i) in categories"
      :key="i"
      tag
      label
      small
      color="secondary"
      text-color="white"
    >{{ category.text }}</v-chip>
  </v-container>
</template>

<style lang="stylus" scoped>
.text-shadow {
  text-shadow: 2px 2px #000000;
}
</style>
