<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('site', ['settings']),
    ...mapGetters('site', ['supportedLangs', 'availableLangs', 'lang'])
  },
  mounted () {
    this.site.name = this.settings.site_name
    this.site.url = this.settings.url
    this.site.email = this.settings.email
    this.site.location = this.settings.location
    this.site.founded = this.settings.founded
    this.site.defaultLang = this.settings.default_lang
    this.site.supportedLang = this.settings.supported_langs
    this.site.socialLinks = this.settings.social_links
  },
  data: () => ({
    valid: true,
    active: null,
    site: {
      name: '',
      url: '',
      email: '',
      location: '',
      defaultLang: '',
      supportedLang: [],
      socialLinks: [{ href: '', icon: '' }],
      founded: ''
    },
    rules: {
      name: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    },
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: false
  }),
  watch: {
    defaultLang: val => {
      this.site.supportedLang.indexOf(val) === -1
        ? this.site.supportedLang.push(val)
        : console.log(val)
    }
  },
  methods: {
    ...mapActions('admin', ['updateSettings']),
    validate () {
      if (this.$refs.form.validate()) {
        // this.snackbar = true
        this.updateSettings(this.site).then(res => {})
      }
    },
    pushSocialLink () {
      this.site.socialLinks.push({ href: '', icon: '' })
    },
    removeSocialLink (index) {
      this.site.socialLinks.splice(index, 1)
    }
  }
}
</script>

<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-tabs v-model="active" color="cyan" dark grow slider-color="yellow">
      <v-tab>Langauage</v-tab>
      <v-tab-item>
        <v-container fluid>
          <v-layout>
            <v-flex md2>
              <v-select
                v-model="site.defaultLang"
                :items="availableLangs"
                item-text="native_name"
                item-value="abr_2"
                label="Default Language"
              ></v-select>
            </v-flex>
            <v-flex md10>
              <v-select
                v-model="site.supportedLang"
                :items="availableLangs"
                item-text="native_name"
                item-value="abr_2"
                label="Supported Languages"
                multiple
              ></v-select>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
      <v-tab>Site Details</v-tab>
      <v-tab-item>
        <v-container fluid>
          <v-text-field v-model="site.name" label="Site Name" />
          <v-text-field v-model="site.url" label="Site Url" />
          <v-text-field v-model="site.email" label="Site email" />
          <v-text-field v-model="site.location" label="Location" />
          <v-text-field v-model="site.founded" label="Founded" />
        </v-container>
      </v-tab-item>
      <v-tab>
        Social Links
        <v-btn icon @click="pushSocialLink">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-tab>
      <v-tab-item>
        <v-container fluid>
          <v-layout v-for="(item, index) in site.socialLinks" :key="index">
            <v-flex md2>
              <v-text-field
                v-model="site.socialLinks[index].icon"
                label="icon"
              />
            </v-flex>
            <v-flex md9>
              <v-text-field
                v-model="site.socialLinks[index].href"
                label="url"
              />
            </v-flex>
            <v-flex md1>
              <v-btn @click="removeSocialLink(index)" icon>
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
    </v-tabs>

    <v-btn color="warning" @click="validate()">Update</v-btn>
  </v-form>
</template>
