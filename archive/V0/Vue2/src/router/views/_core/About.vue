<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    // Contact: () => import('@/components/about/Contact')
  },
  computed: {
    ...mapGetters('site', ['pages'])
  }
}
</script>

<template>
  <section id="about" class="hide-overflow">
    <v-card class="mx-auto hidden-md-and-up">
      <v-img :src="pages['about'].hero" height="40vh">
        <div class="bg-tint"></div>
        <v-layout
          align-end
          justify-center
          fill-height
          pa-3
          wrap
          white--text
        >
          <div class="text-xs-center">
            <h1>{{ pages['about'].content.name }}</h1>
            <h2 class="font-weight-light">{{ pages['about'].content.status }}</h2>
          </div>
        </v-layout>
      </v-img>
      <v-card-text>
        <p
          class="mb-5 title font-weight-light"
          style="line-height: 1.7 !important;"
          v-html="pages['about'].content.about"
        ></p>
        <h3
          class="display-1 v-heading mb-3 font-weight-light info--text"
          v-html="pages['about'].content.skills.title"
        ></h3>
        <p
          class="mb-5 title font-weight-light"
          style="line-height: 1.7 !important;"
          v-html="pages['about'].content.skills.intro"
        ></p>

        <v-layout
          v-for="skill in pages['about'].content.skills.list"
          :key="skill.name"
          style="color: #69A1BB;"
          wrap
        >
          <v-flex xs6 text-uppercase v-text="skill.name" />
        </v-layout>
      </v-card-text>
      <v-divider></v-divider>
    </v-card>
    <v-layout white class="hidden-sm-and-down">
      <v-flex sm12 md6>
        <v-img :src="pages['about'].hero" height="100%"></v-img>
      </v-flex>
      <v-flex sm12 md6 pa-5>
        <h1 class="display-1 v-heading mb-3 font-weight-light info--text">{{ pages['about'].title }}</h1>
        <h2 class="font-weight-light">{{ pages['about'].sub_title }}</h2>
        <p
          class="mb-5 title font-weight-light"
          style="line-height: 1.7 !important;"
          v-html="pages['about'].content.about"
        ></p>

        <h3
          class="display-1 v-heading mb-3 font-weight-light info--text"
          v-html="pages['about'].content.skills.title"
        ></h3>
        <p
          class="mb-5 title font-weight-light"
          style="line-height: 1.7 !important;"
          v-html="pages['about'].content.skills.intro"
        ></p>
        <v-layout
          v-for="skill in pages['about'].content.skills.list"
          :key="skill.name"
          style="color: #69A1BB;"
          wrap
        >
          <v-flex xs6 text-uppercase v-text="skill.name" />
        </v-layout>
      </v-flex>
    </v-layout>
  </section>
</template>

<style lang="stylus">
.v-heading {
  letter-spacing: 3px !important;
}
.bg-tint {
  position: absolute;
  background-color: rgba(0,0,0,0.5);
  width:100%;
  height:100%;
  z-index: -1;
}
</style>
