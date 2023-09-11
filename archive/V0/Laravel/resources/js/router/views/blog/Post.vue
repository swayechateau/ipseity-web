<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Blog-Post',
  components: {
    Article: () => import('@/components/blog/Article')
  },
  props: {
    post: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters('site', ['posts'])
  }
}
</script>

<template>
  <div>
    <template v-for="article in posts" >
      <Article v-if="article.index == post" :key="article.name" :article="article"></Article>
    </template>
  </div>
</template>
