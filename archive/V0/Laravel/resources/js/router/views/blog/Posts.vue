<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Blog-Home',
  components: {
    Articles: () => import('@/components/blog/Articles'),
    Categories: () => import('@/components/blog/Categories')
  },
  computed: {
    ...mapGetters('site', ['pages', 'siteWords'])
  }
}
</script>

<template>
  <div id="home">
    {{ siteWords.categories }}
    <categories banner/>
    <articles></articles>
    <social />
  </div>
</template>
