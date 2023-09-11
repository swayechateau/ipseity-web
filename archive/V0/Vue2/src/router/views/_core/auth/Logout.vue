<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapGetters(['pages'])
  },
  methods: {
    ...mapActions(['authLogin']),
    authenticateUser () {
      this.authLogin(this.form).then(res => {
        this.$router.push({name: 'dashboard'})
      })
    }
  }
}
</script>
<template>
  <v-img :src="pages['login'].hero" height="80vh">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>{{ pages['login'].name }}</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  prepend-icon="mdi-email"
                  name="email"
                  v-model="form.email"
                  :label="pages['login'].content.email"
                  type="email"
                ></v-text-field>
                <v-text-field
                  id="password"
                  prepend-icon="mdi-lock"
                  name="password"
                  v-model="form.password"
                  :label="pages['login'].content.password"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="authenticateUser()" @keyup.enter="authenticateUser()">{{ pages['login'].content.submit }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
</template>
