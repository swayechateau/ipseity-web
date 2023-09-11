<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Blog-Home',
  components: {
    Banner: () => import('@/components/blog/Banner'),
    FeaturedPosts: () => import('@/components/blog/FeaturedPosts'),
    // Articles: () => import('@/components/blog/Articles')
    Social: () => import('@/components/blog/social/Social')
  },
  computed: {
    ...mapGetters('site', ['pages', 'siteWords'])
  }
}
</script>

<template>
  <div id="home">
    <banner :value="pages['blog']" blog/>
    <h2 class="text-xs-center pa-3 text-capitalize"> {{ siteWords.recentPosts }} </h2>
    <featured-posts full />
    <social />
  </div>
</template>
