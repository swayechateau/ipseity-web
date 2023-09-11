<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    username: '',
    password: '',
    authError: null,
    tryingToLogIn: false
  }),
  computed: {
    ...mapGetters('site', ['pages'])
  },
  methods: {
    ...mapActions('auth', ['logIn']),
    authenticateUser () {
      this.tryingToLogIn = true
      this.logIn({
        email: this.username,
        password: this.password
      }).then(res => {
        this.tryingToLogIn = false
        this.$router.push(this.$route.query.redirectFrom || { name: 'dashboard' })
      }).catch(error => {
        this.tryingToLogIn = false
        this.authError = error
        this.$swal.fire({
          icon: 'error',
          text: error.response.data
        })
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
              <v-form @submit.prevent="authenticateUser()">
                <v-text-field
                  prepend-icon="mdi-email"
                  name="email"
                  v-model="username"
                  :label="pages['login'].content.email"
                  type="email"
                ></v-text-field>
                <v-text-field
                  id="password"
                  prepend-icon="mdi-lock"
                  name="password"
                  v-model="password"
                  :label="pages['login'].content.password"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-progress-circular v-if="tryingToLogIn" :size="30" color="primary" indeterminate></v-progress-circular>
              <v-btn v-else color="primary" @click="authenticateUser()" @keyup.enter="authenticateUser()">
                {{ pages['login'].content.submit }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
</template>
