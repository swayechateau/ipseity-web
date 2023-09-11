<script>
import { mapState, mapActions } from "vuex";
export default {
  data: () => ({
      showMenu: false,
      }),
  computed: {
    ...mapState(["lang", "settings"])
  },
  methods: {
     ...mapActions(["changeLang"])
  }
};
</script>
<template>
  <div class="text-xs-center">
    <v-btn flat @click="showMenu = !showMenu">{{ lang }}</v-btn>
    <v-menu absolute bottom right v-model="showMenu">
      
      <v-list>
        <v-list-tile
          v-for="l in settings.supported_langs"
          :key="l"
          @click="changeLang(l)"
        >
          <v-list-tile-title>{{ l }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>