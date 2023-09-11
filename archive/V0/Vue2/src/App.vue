<script>
const defaultLayout = 'default'
export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || defaultLayout) + '-layout'
    }
  }
}
</script>
<template>
  <div id="app">
    <component :is="layout">
    </component>
  </div>
</template>

<style>
#nprogress .bar {
  background: green;
}
</style>
