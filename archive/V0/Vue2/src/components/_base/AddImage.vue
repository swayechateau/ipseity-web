
<script>
export default {
  data: () => ({
    imageUrl: ''
  }),
  props: ['value'],
  computed: {
    image: {
      get () {
        if (typeof this.value === 'string') {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.imageUrl = this.value
          return null
        }
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    pickFile () {
      this.$refs.imageInput.click()
    },
    setImage (event) {
      this.image = event.target.files[0]
      const reader = new FileReader()
      const parent = this

      reader.addEventListener(
        'load',
        function () {
          // convert image file to base64 string
          parent.imageUrl = reader.result
        },
        false
      )
      reader.readAsDataURL(event.target.files[0])
      parent.image = event.target.files[0]
    }
  }
}
</script>
<template>
  <v-flex
    @click="pickFile"
    xs12class="text-xs-center text-sm-center text-md-center text-lg-center"
    width="100%"
    height="100%"
  >
    <v-btn v-if="!imageUrl">Click here</v-btn>
    <img
      ref="imagePreview"
      v-if="imageUrl"
      :src="imageUrl"
      height="100%"
      width="100%"
    />
    <div style="display:none">{{ image }}</div>
    <input
      v-show="false"
      ref="imageInput"
      type="file"
      accept="image/*"
      @change="setImage"
    />
  </v-flex>
</template>
