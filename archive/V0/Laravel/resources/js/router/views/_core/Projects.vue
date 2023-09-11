<script>
import { mapGetters } from 'vuex'
import { pageTitle } from '@/utils/page-meta'
export default {
  head: {
    title: () => {
      return {
        inner: pageTitle('projects')
      }
    },
    meta: () => {
      return [
        {
          name: 'description', content: `Log in to Swaye Chateau`
        }
      ]
    }
  },
  data: () => ({
    dialog: false,
    proj: {}
  }),
  computed: {
    ...mapGetters('site', ['projects', 'pages'])
  },
  methods: {
    showProject (project) {
      this.proj = project
      this.dialog = true
    }
  }
}
</script>

<template>
  <div class="projects">
    <v-parallax style="height:40vh; min-height:300px;" :src="pages['projects'].hero">
      <div class="bg-tint"></div>
      <v-layout pa-2 ma-0 align-center column fill-height justify-center>
        <h1 class="display-2 mb-3">{{ pages['projects'].title }}</h1>
        <h2 class="font-weight-light">{{ pages['projects'].sub_title }}</h2>
      </v-layout>
    </v-parallax>

    <v-container fluid>
      <v-layout wrap>
        <v-flex py-3 xs12 sm6 md4 v-for="project in projects" :key="project.index">
          <v-card class="ma-2" height="100%" hover @click.stop="showProject(project)">
            <v-img :src="project.hero" aspect-ratio="2.6">
              <v-layout justify-end>
                <v-spacer />
              </v-layout>
            </v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ project.name }}</h3>
                <div>{{ project.description }}</div>
              </div>
            </v-card-title>

            <v-card-actions v-if="project.tags">
              <v-chip dark color="blue" v-for="tag in project.tags" :key="tag">{{ tag }}</v-chip>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-dialog v-model="dialog" max-width="80%">
          <v-card>
            <v-layout>
              <v-flex sm12 md4>
                <v-img :src="proj.hero" aspect-ratio="1.6">
                  <v-layout justify-end>
                    <v-spacer />
                  </v-layout>
                </v-img>
              </v-flex>
              <v-flex sm12 md8>
                <v-card-title class="headline">{{ proj.name }}</v-card-title>

                <v-card-text
                  v-html="proj.content ? proj.content.body : proj.description"
                >{{ proj.description }}</v-card-text>
                <v-spacer />
                <v-card-actions class="br-actions">
                  <v-btn
                    v-if="proj.open_source && proj.git_url"
                    color="green darken-1"
                    flat="flat"
                    target="_blank"
                    :href="proj.git_url"
                  >View Code</v-btn>
                  <v-btn
                    color="green darken-1"
                    flat="flat"
                    v-if="proj.demo_url"
                    target="_blank"
                    :href="proj.demo_url"
                  >View Demo</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-container>
  </div>
</template>
<style lang="stylus">
.bg-tint {
  position: absolute;
  background-color: rgba(0,0,0,0.2);
  width:100%;
  height:100%;
  z-index: -1;
  left: 0;
  right: 0;
}

.br-actions {
  bottom: 0px;
  position: absolute;
  right: 0;
}
</style>
