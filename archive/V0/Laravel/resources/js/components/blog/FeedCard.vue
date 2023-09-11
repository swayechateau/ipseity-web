<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    size: {
      type: Number,
      required: true
    },
    value: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    showCats (category) {
      this.$router.go(`/search?categories=${category}`)
    }
  },
  computed: {
    ...mapGetters('site', ['siteWords']),
    classes () {
      return {
        'md6': this.size === 2,
        'md4': this.size === 3
      }
    }
  }
}
</script>

<template>
  <v-flex
    xs12
    :class="classes"
  >
    <base-card
      :height="value.prominent ? 450 : 350"
      color="grey lighten-1"
      dark
      :to="`${value.slug}`"
    >
      <v-img
        :src="value.hero"
        height="100%"
        gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
      >
        <v-layout
          fill-height
          wrap
          text-xs-right
          ma-0
        >
          <v-flex xs12>
            <v-chip
              label
              class="mx-0 mb-2 text-uppercase"
              color="grey darken-3"
              text-color="white"
              small
              v-if="value.category"
              :title="value.category"
              @click.stop="showCats(value.category)"
            >
              {{ value.category }}
            </v-chip>
            <h3 :title="value.title" class="title font-weight-bold mb-2">
              {{ value.title }}
            </h3>
            <div class="caption">
              {{ [value.posted_at] | moment('dddd, MMMM Do YYYY') }}
            </div>
          </v-flex>
          <v-flex align-self-end>
            <v-chip
              class="text-uppercase ma-0"
              color="primary"
              label
              small
              @click.stop=""
            >
              {{ siteWords.readMore }}
            </v-chip>
          </v-flex>
        </v-layout>
      </v-img>
    </base-card>
  </v-flex>
</template>

<style>
.v-image__image {
  transition: .3s linear;
}
</style>
