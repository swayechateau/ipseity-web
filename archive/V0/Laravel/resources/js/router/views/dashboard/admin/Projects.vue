<script>
export default {
  components: {
    Projects: () => import('@/components/admin/projects/ListProjects')
  },
  computed: {}
}
</script>

<template>
  
  <div>
    <Projects />
  </div>
</template>
