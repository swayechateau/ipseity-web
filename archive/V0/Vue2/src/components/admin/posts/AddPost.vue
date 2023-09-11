<!-- eslint-disable vue/valid-v-model -->
<script>
import QuilEditor from '@/components/_base/Editor.vue'
import AddImage from '@/components/_base/AddImage.vue'
import AddTags from '@/components/_base/AddTags.vue'
export default {
  computed: {
    copy: {
      get () {
        return false
      },
      set (val) {
        if (val === true) {
          this.form['fr'] = this.form['en']
          this.form['ja'] = this.form['en']
        }
        return val
      }
    }
  },
  data () {
    return {
      dialog: false,
      form: {
        hero: null,

        name: '',
        slug: '',
        en: {
          tags: [],
          title: '',
          sub_title: '',
          name: '',
          category: '',
          description: '',
          content: {
            body: ''
          }
        },
        fr: {
          tag: [],
          title: '',
          sub_title: '',
          name: '',
          category: '',
          description: '',
          content: {
            body: ''
          }
        },
        ja: {
          tags: [],
          title: '',
          sub_title: '',
          name: '',
          category: '',
          description: '',
          content: {
            body: ''
          }
        }
      }
    }
  },
  components: {
    QuilEditor,
    AddImage,
    AddTags
  }
}
</script>
<template>
  <v-layout row justify-end>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on" icon
          ><v-icon>mdi-plus</v-icon></v-btn
        >
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>New Page</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <add-image v-model="form['hero']"></add-image>
        <v-switch v-model="copy" label="Page Copy en to others" />
        <v-text-field v-model="form['name']" label="Page Name" readonly/>
        <v-text-field v-model="form['slug']" label="Page Slug" readonly/>

        <v-divider></v-divider>
        <v-expansion-panel>
          <v-expansion-panel-content v-for="(item, i) in ['en','fr','ja']" :key="i">
            <template v-slot:header>
              <div>{{ item }}</div>
            </template>
            <v-card>
              <v-card-text>
                <add-tags v-model="form[`${item}`]['tags']"></add-tags>
                <v-text-field v-model="form[`${item}`]['name']" label="Page Name" />
                <v-text-field v-model="form[`${item}`]['title']" label="Page Title" />
                <v-text-field v-model="form[`${item}`]['sub_title']" label="Page Subtitle" />
                <v-text-field v-model="form[`${item}`]['description']" label="Page Description" />

                <v-text-field v-model="form[`${item}`]['category']" label="Page Category" />
                <quil-editor v-model="form[`${item}`]['content']['body']"></quil-editor>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
