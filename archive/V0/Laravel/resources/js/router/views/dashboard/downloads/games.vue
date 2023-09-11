<script>
export default {
  data () {
    return {
      fields: ['title', 'type', 'download'],
      items: [{
        text: 'Home',
        href: '#'
      }, {
        text: 'Downloads',
        href: '#'
      }, {
        text: 'Sims 2',
        active: true
      }]
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
            {
              key: 'sims_2',
              title: 'Whitcher 1',
              supports: 'Windows',
              tags: ''
            },
            {
              key: 'sims_2',
              title: 'Whitcher 2',
              supports: 'Windows',
              tags: ''
            }
          ]
        case 'mobile':
          return [
            { title: 'Dickerson', supports: 'Macdonald', tags: '' },
            { title: 'Larsen', supports: 'Shaw', tags: '' },
            { title: 'Geneva', supports: 'Wilson', tags: '' },
            { title: 'Jami', supports: 'Carney', tags: '' }
          ]
        default:
          return [
            { title: 'University', type: 'Expansion Pack', download: '' },
            { title: 'Nightlife', type: 'Expansion Pack', download: '' },
            { title: 'Open for Business', type: 'Expansion Pack', download: '' },
            { title: 'Pets', type: 'Expansion Pack', download: '' },
            { title: 'Seasons', type: 'Expansion Pack', download: '' },
            { title: 'Bon Voyage', type: 'Expansion Pack', download: '' },
            { title: 'Free Time', type: 'Expansion Pack', download: '' },
            { title: 'Apartment Life', type: 'Expansion Pack', download: '' },
            { title: 'University', type: 'Stuff Pack', download: '' }
          ]
      }
    }
  }
}
</script>

<template>
  <div class="games">
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-breadcrumb :items="items"/>
        </b-col>
        <b-col cols="9">
          <b-jumbotron>
            <template slot="header">Sims 2</template>
            <template slot="lead">
              This title has all avalible DLC, if crack is not in archive, please download crack sepratately
            </template>
            <hr class="my-4">
            <h4>Description</h4>

                <p>The Sims 2 is a 2004 strategic life simulation video game developed by Maxis and published by Electronic Arts. It is the sequel to The Sims. The game has the same concept as its predecessor: players control their Sims in various activities and form relationships in a manner similar to real life.</p>
            <p> Tags: </p>
            <b-btn variant="primary" href="#">Download</b-btn>
          </b-jumbotron>
        </b-col>
        <b-col>
          <b-card
            title="System Requirements"
            tag="article"
            class="mb-3"
          >
            <div class="card-text text-left">
                <p></p>
                <p>System: Windows 7 (64bit)</p>
                <p>CPU: i5-2500K 3.3 GHz / Phenom II X4 940</p>
                <p>Memory: 6 GB RAM</p>
                <p>GPU: Nvidia GTX 660 / AMD Radeon 7870</p>
                <p>DirectX: 11</p>
                <p>Size: 35 GB </p>
                <p>Crack Available: Yes </p>
                </div>
            <b-button href="#" variant="primary">Download Crack</b-button>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <h3>Downloadable Content</h3>
        <b-table small hover :items="checkType(this.type)" :fields="fields"></b-table>
      </b-row>
    </b-container>
  </div>
</template>
