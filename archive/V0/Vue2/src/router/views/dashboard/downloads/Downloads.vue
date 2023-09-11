
<script>
export default {
  components: {
    gamesTable: () => import('@/components/tables/gamesTable')
  },
  data () {
    return {
      menu: ['Applications', 'Games', 'Pictures', 'Videos', 'Tools']
    }
  }
}
</script>

<template>
  <div id="downloads">
    <template>
      <div>
        <v-tabs v-model="active" color="cyan" dark slider-color="yellow">
          <v-tab v-for="n in menu" :key="n" ripple>{{n}}</v-tab>
          <v-tab-item v-for="n in menu" :key="n">
            <v-card flat>
              <b-tabs v-if="n === 'Applications'" pills vertical end>
                <b-tab title="Desktop" active>Tab Contents 1</b-tab>
                <b-tab title="Mobile">Tab Contents 2</b-tab>
              </b-tabs>
              <b-tabs v-else-if="n === 'Games'" pills vertical end>
                <b-tab title="Desktop" active>
                  <games-table type="desktop" />
                </b-tab>
                <b-tab title="Mobile">
                  <games-table type="mobile" />
                </b-tab>
                <b-tab title="VR">
                  <games-table type="vr" />
                </b-tab>
              </b-tabs>
              <v-card-text v-else>Tools are only avalible for Windows and Linux</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </div>
    </template>
  </div>
</template>
