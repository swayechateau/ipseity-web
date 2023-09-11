<script>
import { mapGetters } from 'vuex'
import { postTitle } from '@/utils/page-meta'
export default {
  created () {
    postTitle(this.article.title)
  },
  computed: {
    ...mapGetters('site', ['siteWords'])
  },
  components: {
    Search: () => import('@/components/search/SearchBox'),
    Comments: () => import('@/components/blog/Comments'),
    Tags: () => import('@/components/blog/Tags'),
    NewestPosts: () => import('@/components/blog/NewestPosts')
  },
  props: {
    article: {
      type: Object
    }
  }
}
</script>

<template>
  <div id="post">
    <v-img :src="article.hero" height="35vh">
      <v-layout style="background:rgba(0,0,0,0.3)" justify-center fill-height column align-center>
        <h1 class="pa-3 white--text">{{ article.title }}</h1>
      </v-layout>
    </v-img>
    <v-container fluid style="margin-top:-65px">
      <v-layout wrap>
        <v-flex sm12 md9 class="pa-2">
          <v-card>
            <v-card-title>
              <span class="grey--text"><strong class="info--text">{{ siteWords.updated }}: </strong> {{ [article.updated_at] | moment('dddd, MMMM Do YYYY, h:mm:ss a') }}</span>
              <v-spacer />
              <v-chip v-if="article.category" label>{{ article.category }}</v-chip>
            </v-card-title>
            <v-card-text v-html="article.content.body" />
            <v-card-title>
              <span class="grey--text"><strong class="info--text">{{ siteWords.created }}:</strong> {{ [article.posted_at] | moment('dddd, MMMM Do YYYY, h:mm:ss a') }}</span>
              <v-spacer /><span v-if="!article.comments">{{ siteWords.commentsDisabled }}</span>
            </v-card-title>
          </v-card>
          <comments v-if="article.comments" :comments="article.comments"></comments>
        </v-flex>
        <v-flex md3 sm12 class="pa-2">
          <v-card>
            <v-container fluid>
              <search :label="siteWords.searchBlog"/>
              <tags :tags="article.tags" />
              <hr />
              <div class="pa-3" />
              <NewestPosts />
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
