<script>
export default {
  components: {
    Posts: () => import('@/components/admin/posts/ListPosts')
  },
  computed: {}
}
</script>

<template>
  <div>
    <Posts />
  </div>
</template>
