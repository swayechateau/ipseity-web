<template>
  <div>
    <v-data-table :headers="headers" :items="Object.values(pages[lang])">
      <template v-slot:items="props">
        <td>
          <v-btn flat @click="editPage(props.item.id)">
            {{ props.item.name }}
          </v-btn>
        </td>
        <td>
          <div>{{ props.item.slug }}</div>
        </td>
        <td>
          <div>{{ props.item.lang}}</div>
        </td>
        <td>
          <v-btn flat @click="editPage(props.item.id)" icon>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn @click="deleteUser(props.item.id)" flat icon>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('admin', ['pages']),
    ...mapGetters('site', ['lang'])
  },
  data () {
    return {
      headers: [
        {
          text: 'Name',
          align: 'left',
          value: 'name'
        },
        { text: 'Slug', value: 'slug' },
        { text: 'Lang', value: 'lang' },
        { text: 'Actions', width: '152px', sortable: false, value: 'protein' }
      ]
    }
  },
  methods: {
    deletePage (id) {
      this.snack = true
      this.snackColor = 'success'
      this.snackText = 'User Deleted'
    },
    editPage (id) {
      this.snack = true
      this.snackColor = 'success'
      this.snackText = id
    }
  }
}
</script>
