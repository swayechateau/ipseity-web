import Vue from 'vue'
import axios from 'axios'

let api
const baseURL = '/api'
const timeout = 90000

function setAuthToken (token) {
  let axiosConfig = {
    baseURL,
    timeout,
    headers: { 'Authorization': token ? 'Bearer ' + token : '' }
  }
  api = axios.create(axiosConfig)
}
setAuthToken()
Vue.prototype.$axios = api

export {
  api,
  setAuthToken
}
