<script>
export default {
  data: () => ({
    content: [],
    config: {
  modules: {
    toolbar: [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],
['link', 'image'],
  ['clean']                                         // remove formatting button
]
  }
}
  }),
  components: {
    // Settings: () => import('@/components/admin/Settings'),
    // SiteWords: () => import('@/components/admin/SiteWords')
  },
  computed: {
  }
}
</script>

<template>
  <v-container>
    <v-card>
      <quill v-model="content" :config="config"></quill>
    </v-card>
  </v-container>
</template>
