import { api } from '@/utils/api'

export const state = {
  translations: [],
  pages:[],
  posts:[],
  projects:[]
}

export const getters = {
  pages: state => state.pages,
  posts: state => state.posts,
  projects: state => state.projects,
}

export const mutations = {
  setTranslations (state, newValue) {
    state.translations = newValue
  },
  setPages (state, newValue) {
    state.pages = newValue
  },
  setPosts (state, newValue) {
    state.posts = newValue
  },
  setProjects (state, newValue) {
    state.projects = newValue
  }
}

export const actions = {
  init ({ dispatch }) {
    dispatch('getTranslations')
    dispatch('getPages')
    dispatch('getPosts')
    dispatch('getProjects')
  },
  getTranslations ({ commit }) {
    return api.get(`/sitewords`).then(res => {
      console.log(res)
      commit('setTranslations', res.data)
      return res.data
    }).catch(err => {
      console.warn(err)
    })
  },
  getPages ({ commit }) {
    return api.get(`/pages`).then(res => {
      console.log(res)
      commit('setPages', res.data)
      return res.data
    }).catch(err => {
      console.warn(err)
    })
  },
  getPosts ({ commit }) {
    return api.get(`/posts`).then(res => {
      console.log(res)
      commit('setPosts', res.data)
      return res.data
    }).catch(err => {
      console.warn(err)
    })
  },
  getProjects ({ commit }) {
    return api.get(`/projects`).then(res => {
      console.log(res)
      commit('setProjects', res.data)
      return res.data
    }).catch(err => {
      console.warn(err)
    })
  },
  updateSettings ({ dispatch }, form) {
    // 1. Check if we can get live data.
    return api.put(`/settings`, { form }).then(res => {
      console.log(res)
      return res.data
    }).catch(err => {
      console.warn(err)
    })
  }
}
