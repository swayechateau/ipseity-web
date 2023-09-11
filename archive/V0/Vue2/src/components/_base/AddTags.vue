<script>
export default {
  data: () => ({
    items: ['Gaming', 'Programming', 'Vue', 'Vuetify'],

    search: null
  }),
  props: ['value', 'label'],
  computed: {
    model: {
      get () {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.items = this.value
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
<template>
  <v-container fluid>
    <v-combobox
      v-model="model"
      :items="items"
      :search-input.sync="search"
      hide-selected
      :label="label ? label :'Add some tags'"
      multiple
      persistent-hint
      small-chips
    >
      <template v-slot:no-data>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-combobox>
  </v-container>
</template>
