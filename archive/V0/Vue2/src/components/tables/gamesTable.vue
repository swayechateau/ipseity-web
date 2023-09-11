<template v-if="this.type">
  <b-table small hover :items="checkType(this.type)" :fields="fields">
    <template slot="title" slot-scope="data">
      <b-link :to="'/games/'+ data.item.key">{{data.value}}</b-link>
    </template>
  </b-table>
</template>

<script>
export default {
  data () {
    return {
      fields: ['title', 'supports', 'tags']
    }
  },
  props: ['type'],
  methods: {
    checkType: type => {
      switch (type) {
        case 'vr':
          return [
            { title: 40, supports: 'Oculus Rift | HTC Vive', tags: 'Standing' },
            { title: 21, supports: 'Oculus Rift', tags: 'Seated' },
            {
              title: 89,
              supports: 'Oculus Rift',
              tags: '360 Standing | Seated'
            }
          ]
        case 'desktop':
          return [
            { key: 'sims_2', title: 'Sims 2', supports: 'Windows', tags: '' },
            { key: 'sims_3', title: 'Sims 3', supports: 'Windows', tags: '' },
            { key: 'sims_2', title: 'Whitcher 1', supports: 'Windows', tags: '' },
            { key: 'sims_2', title: 'Whitcher 2', supports: 'Windows', tags: '' }
          ]
        case 'mobile':
          return [
            { title: 'Dickerson', supports: 'Macdonald', tags: '' },
            { title: 'Larsen', supports: 'Shaw', tags: '' },
            { title: 'Geneva', supports: 'Wilson', tags: '' },
            { title: 'Jami', supports: 'Carney', tags: '' }
          ]
        default:
          return [{ title: 'Dickerson', supports: 'Macdonald', tags: '' }]
      }
    }
  }
}
</script>
